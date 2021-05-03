using Mod.Framework.Application;
using Mod.Framework.Notifications.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Notifications.Hosting
{
    public interface INotificationBackgroundService
    {
        void ProcessNotifications();
    }
}
