using Mod.Framework.Notifications.Domain.Entities;
using System.Collections.Generic;

namespace Mod.Framework.Notifications.Domain.Services
{
    public interface INotificationDomService
    {
        Notification CreateNotification(int notificationType, string recipient, Dictionary<string, string> dictionary, string cc);

        Notification CreateNotification(NotificationTemplate template, string recipient, Dictionary<string, string> dictionary, string cc);

        Notification CreateNotification(int notificationType, string recipient, Dictionary<string, string> dictionary, string body, string cc);

        Notification CreateNotification(NotificationTemplate template, string recipient, Dictionary<string, string> dictionary, string body, string cc);

        Notification AddNotification(Notification notification);
    }
}