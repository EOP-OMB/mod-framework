using Microsoft.Extensions.Logging;
using Mod.Framework.Notifications.Domain.Entities;
using Mod.Framework.Notifications.Domain.Interfaces;
using Mod.Framework.Notifications.Enumerations;
using Mod.Framework.Runtime.Security;
using Mod.Framework.User.Entities;
using Mod.Framework.User.Interfaces;
using System.Collections.Generic;

namespace Mod.Framework.Notifications.Domain.Services
{
    public class NotificationDomService : INotificationDomService
    {
        private readonly INotificationTemplateRepository TemplateRepository;
        private readonly INotificationRepository Repository;
        private readonly IApplicationRoles ApplicationRoles;
        private readonly IEmployeeRepository EmployeeRepository;

        public NotificationDomService(INotificationTemplateRepository templateRepository, INotificationRepository repository, IApplicationRoles appRoles, IEmployeeRepository employeeRepository, ILogger<NotificationDomService> logger)
        {
            this.TemplateRepository = templateRepository;
            this.Repository = repository;
            this.ApplicationRoles = appRoles;
            this.EmployeeRepository = employeeRepository;
        }

        public Notification CreateNotification(int notificationType, string recipient, Dictionary<string, string> dictionary)
        {
            var template = TemplateRepository.Single(x => x.Type == notificationType);

            return CreateNotification(template, recipient, dictionary);
        }

        public Notification CreateNotification(NotificationTemplate template, string recipient, Dictionary<string, string> dictionary)
        {
            var body = Replace(template.Body, dictionary);

            return CreateNotification(template, recipient, dictionary, body);
        }

        public Notification CreateNotification(int notificationType, string recipient, Dictionary<string, string> dictionary, string body)
        {
            var template = TemplateRepository.Single(x => x.Type == notificationType);

            if (string.IsNullOrEmpty(body)) 
                body = Replace(template.Body, dictionary);

            return CreateNotification(template, recipient, dictionary, body);
        }

        public Notification CreateNotification(NotificationTemplate template, string recipient, Dictionary<string, string> dictionary, string body)
        {
            var notification = new Notification();

            notification.UpdateCurrentStatus(NotificationStatuses.PENDING.ToString());
            notification.NotificationTemplateId = template.Id;

            var subject = Replace(template.Subject, dictionary);

            if (subject.Length > 255)
                subject = subject.Substring(0, 251) + "...";

            notification.Subject = subject;

            notification.Body = body;
            notification.Type = template.Type;
            notification.IsAnnouncement = template.IsAnnouncement;

            if (template.RecipientType == (int)RecipientTypes.USER)
                notification.Recipient = recipient;
            else if (template.RecipientType == (int)RecipientTypes.GROUP)
            {
                notification.Recipient = GetGroupEmails(template.RecipientGroup);
            }
            else if (template.RecipientType == (int)RecipientTypes.ROLE)
            {
                var groups = ApplicationRoles.GetRoleGroups(template.RecipientGroup);
                var to = "";

                foreach (string group in groups)
                {
                    to = GetGroupEmails(group, to);
                }

                notification.Recipient = to;
            }

            notification.Recipient = notification.Recipient.TrimEnd(',');
            
            if (template.IncludeCc)
                notification.Cc = dictionary.TryGetValue("Cc", out string value) ? value : "";

            return notification;
        }

        private string GetGroupEmails(string group, string to = "")
        {
            var employees = EmployeeRepository.GetAllInGroup(group);
            
            foreach (Employee employee in employees)
            {
                if (!string.IsNullOrEmpty(employee.EmailAddress))
                    to += employee.EmailAddress + ',';
            }

            return to;
        }

        private string Replace(string text, Dictionary<string, string> dictionary)
        {
            foreach (KeyValuePair<string, string> entry in dictionary)
                text = text.Replace("[" + entry.Key + "]", entry.Value);

            return text;
        }

        public Notification AddNotification(Notification notification)
        {
            return Repository.Insert(notification);
        }
    }
}
