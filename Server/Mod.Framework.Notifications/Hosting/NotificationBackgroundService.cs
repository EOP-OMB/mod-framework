using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Mod.Framework.Application;
using Mod.Framework.Application.ObjectMapping;
using Mod.Framework.Domain.Exceptions;
using Mod.Framework.Notifications.Domain.Entities;
using Mod.Framework.Notifications.Domain.Interfaces;
using Mod.Framework.Notifications.Enumerations;
using Mod.Framework.Notifications.Extensions;
using Mod.Framework.Runtime.Security;
using Mod.Framework.Runtime.Session;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Mod.Framework.Notifications.Hosting
{
    public abstract class NotificationBackgroundService : BackgroundService, INotificationBackgroundService
    {
        private ModNotificationOptions Options { get; set; }
        private INotificationRepository Repository { get; set; }
        private INotificationTemplateRepository TemplateRepository { get; set; }
        protected ILogger Logger { get; set; }
        protected IModSession Session { get; set; }

        protected abstract string FromEmailDisplayName { get; set; }

        private readonly IServiceScopeFactory _serviceScopeFactory;

        public NotificationBackgroundService(IOptions<ModNotificationOptions> options, ILogger<INotificationBackgroundService> logger, IServiceScopeFactory serviceScopeFactory)
        {
            _serviceScopeFactory = serviceScopeFactory;
            Logger = logger;
            Options = options?.Value ?? throw new ArgumentNullException(nameof(options));
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            // Ensures that this runs asynchronously
            // https://blog.stephencleary.com/2020/05/backgroundservice-gotcha-startup.html
            await Task.Yield();

            stoppingToken.Register(() => Logger.LogInformation("NotificationBackgroundService background task is stopping."));

            while (!stoppingToken.IsCancellationRequested)
            {
                using (var scope = _serviceScopeFactory.CreateScope())
                {
                    Session = scope.ServiceProvider.GetRequiredService<IModSession>();
                    Repository = scope.ServiceProvider.GetRequiredService<INotificationRepository>();
                    TemplateRepository = scope.ServiceProvider.GetRequiredService<INotificationTemplateRepository>();

                    Logger.LogInformation("NotificationBackgroundService is starting.");

                    RegisterScopedServices(scope);

                    Logger.LogInformation("NotificationBackgroundService background task is doing background work.");

                    await ProcessNotifications();

                    await Task.Delay(TimeSpan.FromMilliseconds(Options.PollingFrequency), stoppingToken);
                }
            }

            Logger.LogWarning("NotificationBackgroundService background task is stopping.");
        }

        protected abstract void RegisterScopedServices(IServiceScope scope);

        public async Task ProcessNotifications()
        {
            // Set the CurrentPrincipal = System
            // System Principal has a upn of "system" and is in all roles so should be able to do the work necessary to generate notifications or perform other background jobs for your app.
            var systemPrincipal = new SystemModPrincipal();
            Thread.CurrentPrincipal = systemPrincipal;

            GenerateNotifications();
            SendNotifications();

            await Task.CompletedTask;
        }

        private void GenerateNotifications()
        {
            // get all templates that are enabled and not real time
            //var templates = NotificationTemplate.GetAll().Where(x => x.Enabled == true && x.Frequency != "Real Time").ToList();
            var templates = this.TemplateRepository.GetAll().Where(x => x.IsEnabled && x.Frequency != (int)NotificationFrequency.REAL_TIME && (x.NextRunTime ?? DateTime.UtcNow.AddMilliseconds(-500)) <= DateTime.UtcNow);

            foreach (NotificationTemplate template in templates)
            {
                if (CheckNextRunDate(template)) 
                { 
                   GenerateNotificationsForTemplate(template);
                }
            }
        }

        private bool CheckNextRunDate(NotificationTemplate template)
        {
            var success = false;

            try
            {
                // Check for next run date, if null, set to now(ish)
                template.NextRunTime = template.NextRunTime ?? DateTime.UtcNow.AddMilliseconds(-500);

                if (template.NextRunTime <= DateTime.UtcNow)
                {
                    // Update Next Run Date
                    while (template.NextRunTime < DateTime.UtcNow)
                        template.NextRunTime = GetNextRunDate((DateTime)template.NextRunTime, template.Frequency);

                    TemplateRepository.Save(template);

                    success = true;
                }
            }
            catch (ModDbConcurrencyException ex)
            {
                Logger.LogInformation(ex.Message);
            }

            return success;
        }

        private void GenerateNotificationsForTemplate(NotificationTemplate template)
        {
            try
            {
                GenerateNotificationForTemplate(template);
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, "Error generating notifications for template " + template.Name);
            }
            finally
            {
                template.LastRunTime = DateTime.UtcNow;

                TemplateRepository.Save(template);
            }
        }

        private static DateTime? GetNextRunDate(DateTime nextRunDate, int frequency)
        {
            switch (frequency)
            {
                case (int)NotificationFrequency.DAILY:
                    nextRunDate = nextRunDate.AddDays(1);
                    break;
                case (int)NotificationFrequency.WEEKLY:
                    nextRunDate = nextRunDate.AddDays(7);
                    break;
                case (int)NotificationFrequency.MONTHLY:
                    nextRunDate = nextRunDate.AddMonths(1);
                    break;
                case (int)NotificationFrequency.HOURLY:
                    nextRunDate = nextRunDate.AddHours(1);
                    break;
            }

            return nextRunDate;
        }

        /// <summary>
        /// Based on the template.Type, use your own application logic to generate new notifications.
        /// An example:
        ///     You may have a reminder email that goes out x days before something is due
        ///     In your override you would query your data for everything due within 7 days and generate a Notification record for those objects
        ///     Use template.Type to separate different notifications
        ///         Might have a Type for due in x days
        ///         Another Type for You are overdue for some task
        ///         etc...
        /// </summary>
        /// <param name="template"></param>
        protected abstract void GenerateNotificationForTemplate(NotificationTemplate template);

        private void SendNotifications()
        {
            var notifications = Repository.GetAll(x => x.NotificationStatuses.OrderByDescending(x => x.CreatedTime).First().Status == NotificationStatuses.PENDING.ToString());

            foreach (var notification in notifications)
            {
                var processingNotification = false;

                try
                {
                    processingNotification = MarkAsInProcess(notification);
                    if (processingNotification)
                    {
                        SendNotification(notification);

                        notification.UpdateCurrentStatus(NotificationStatuses.SENT.ToString());
                        notification.SentDateTime = DateTime.UtcNow;
                    }
                }
                catch (Exception ex)
                {
                    notification.UpdateCurrentStatus(NotificationStatuses.ERROR.ToString(), ex.Message);
                    notification.SentDateTime = null;
                }
                finally
                {
                    if (processingNotification)
                        Repository.Save(notification);
                }
            }
        }

        private bool MarkAsInProcess(Notification notification)
        {
            var success = false;

            try
            {
                notification.UpdateCurrentStatus(NotificationStatuses.IN_PROCESS.ToString());
                Repository.Save(notification);
                success = true;
            }
            catch (ModDbConcurrencyException ex)
            {
                Logger.LogInformation(ex.Message);
            }

            return success;
        }

        protected virtual void SendNotification(Notification notification)
        {
            var client = new SmtpClient("mail.omb.gov");

            var from = new MailAddress("notification@omb.gov", FromEmailDisplayName, Encoding.UTF8);

            using (var message = new MailMessage())
            {
                message.From = from;

                foreach (string to in notification.Recipient.Split(','))
                    message.To.Add(new MailAddress(to));

                message.ReplyToList.Add(new MailAddress("DONOTREPLY@omb.gov"));
                message.IsBodyHtml = true;

                message.Body = notification.Body;

                if (!string.IsNullOrEmpty(notification.Cc))
                {
                    foreach (string cc in notification.Cc.Split(',', ';'))
                        message.CC.Add(new MailAddress(cc));
                }

                message.Subject = notification.Subject;
                message.SubjectEncoding = Encoding.UTF8;

                // Trying to call Asyncronously causes the DbContext to whack out when updating the record.  Needs more research.
                //client.SendCompleted += new SendCompletedEventHandler(SendCompletedCallback);
                //client.SendAsync(message, notification.Id);
                client.Send(message);
            }
        }

        protected virtual void SendCompletedCallback(object sender, AsyncCompletedEventArgs e)
        {
            // Get the unique identifier for this asynchronous operation.
            var id = (int)e.UserState;
            var notification = Repository.Get(id);

            if (e.Cancelled)
            {
                notification.UpdateCurrentStatus(NotificationStatuses.PENDING.ToString());
                notification.SentDateTime = null;
                Logger.LogWarning("Email Notification Canceled for message '" + notification.Subject + "' to " + notification.Recipient);
            }
            if (e.Error != null)
            {
                notification.UpdateCurrentStatus(NotificationStatuses.ERROR.ToString(), e.Error.Message);
                notification.SentDateTime = null;
                Logger.LogError("Email Notification Error for message '" + notification.Subject + "' to " + notification.Recipient + ". The reason given is: '" + e.Error.Message);
            }
            else
            {
                notification.UpdateCurrentStatus(NotificationStatuses.SENT.ToString());
                notification.SentDateTime = DateTime.UtcNow;
            }

            Repository.Save(notification);
        }
    }
}
