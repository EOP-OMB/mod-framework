using Mod.Framework.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Notifications.Domain.Entities
{
    public class NotificationTemplate : Entity
    {
        public int Type { get; set; }   // You should create an Enum of Template Types.
        public string Name { get; set; }
        public int RecipientType { get; set; }
        public string RecipientGroup { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
        public int Frequency { get; set; }
        public DateTime? NextRunTime { get; set; }
        public DateTime? LastRunTime { get; set; }
        public bool IsEnabled { get; set; }
        public bool IsAnnouncement { get; set; }
        public bool IncludeCc { get; set; }
    }
}
