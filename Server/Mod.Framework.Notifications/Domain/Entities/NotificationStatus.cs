using Mod.Framework.Domain.Entities;
using Mod.Framework.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Notifications.Domain.Entities
{
    public class NotificationStatus : AuditedEntity
    {
        public int NotificationId { get; set; }
        public string Status { get; set; }
        public string Message { get; set; }

        public virtual Notification Notification { get; set; }
    }
}
