using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Mod.Framework.Application;
using Mod.Framework.Application.ObjectMapping;
using Mod.Framework.Notifications.Domain.Entities;
using Mod.Framework.Notifications.Domain.Interfaces;
using Mod.Framework.Notifications.Enumerations;
using Mod.Framework.Notifications.Extensions;
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
            using (var scope = _serviceScopeFactory.CreateScope())
            {
                Repository = scope.ServiceProvider.GetRequiredService<INotificationRepository>();
                TemplateRepository = scope.ServiceProvider.GetRequiredService<INotificationTemplateRepository>();
                Session = scope.ServiceProvider.GetRequiredService<IModSession>();

                RegisterScopedServices(scope);

                Logger.LogDebug("NotificationBackgroundService is starting.");

                stoppingToken.Register(() => Logger.LogDebug("#1 NotificationBackgroundService background task is stopping."));

                while (!stoppingToken.IsCancellationRequested)
                {
                    Logger.LogDebug("NotificationBackgroundService background task is doing background work.");

                    ProcessNotifications();

                    await Task.Delay(TimeSpan.FromMilliseconds(Options.PollingFrequency), stoppingToken);
                }

                Logger.LogDebug("NotificationBackgroundService background task is stopping.");
            }
        }

        protected abstract void RegisterScopedServices(IServiceScope scope);

        public void ProcessNotifications()
        {
            GenerateNotifications();
            SendNotifications();
        }

        private void GenerateNotifications()
        {
            // get all templates that are enabled and not real time
            //var templates = NotificationTemplate.GetAll().Where(x => x.Enabled == true && x.Frequency != "Real Time").ToList();
            var templates = this.TemplateRepository.GetAll().Where(x => x.IsEnabled && x.Frequency != (int)NotificationFrequency.REAL_TIME);

            foreach (NotificationTemplate template in templates)
            {
                // Check for next run date, if null, set to now(ish)
                if ((template.NextRunTime ?? DateTime.Now.AddMilliseconds(-500)) <= DateTime.Now)
                    GenerateNotificationsForTemplate(template);
            }
        }

        private void GenerateNotificationsForTemplate(NotificationTemplate template)
        {
            var status = "Success";

            try
            {
                GenerateNotificationForTemplate(template);
            }
            catch (Exception ex)
            {
                status = "Error: " + ex.Message;
            }
            finally
            {
                // This may seem a little weird, why not just add frequency to DateTime.Now?
                // Well, eventually that would get skewed if this process takes any time to run.  We want the time of day to be consistent.
                // So if Next Run Date is set to Midnight, it will always be at midnight.
                // The loop is basically just here in case it gets stuck or set back way in the past.  
                // The loop ensures that the next run date that is set will be in the future.

                // Update Next Run Date
                while (template.NextRunTime < DateTime.Now)
                    template.NextRunTime = GetNextRunDate((DateTime)template.NextRunTime, template.Frequency);

                template.LastRunTime = DateTime.Now;
                //template.LastRunStatus = status;

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
             var notifications = Repository.GetAll(x => x.NotificationStatuses.OrderByDescending(x => x.CreatedTime).First().Status == (int)NotificationStatuses.PENDING);

            foreach (Notification notification in notifications)
            {
                try
                {
                    SendNotification(notification);

                    notification.UpdateCurrentStatus((int)NotificationStatuses.SENT);
                    notification.SentDateTime = DateTime.Now;
                }
                catch (Exception ex)
                {
                    notification.UpdateCurrentStatus((int)NotificationStatuses.ERROR, ex.Message);
                    notification.SentDateTime = null;
                }
                finally
                {
                    Repository.Save(notification);
                }
            }
        }

        protected virtual void SendNotification(Notification notification)
        {
            var client = new SmtpClient("<smtp client>");

            var from = new MailAddress("<from address>", FromEmailDisplayName, Encoding.UTF8);

            using (var message = new MailMessage())
            {
                message.From = from;

                foreach (string to in notification.Recipient.Split(','))
                    message.To.Add(new MailAddress(to));

                message.ReplyToList.Add(new MailAddress("<DONOTREPLY address>"));
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
                notification.UpdateCurrentStatus((int)NotificationStatuses.PENDING);
                notification.SentDateTime = null;
            }
            if (e.Error != null)
            {
                notification.UpdateCurrentStatus((int)NotificationStatuses.ERROR, e.Error.Message);
                notification.SentDateTime = null;
            }
            else
            {
                notification.UpdateCurrentStatus((int)NotificationStatuses.SENT);
                notification.SentDateTime = DateTime.Now;
            }

            Repository.Save(notification);
        }
    }
}
