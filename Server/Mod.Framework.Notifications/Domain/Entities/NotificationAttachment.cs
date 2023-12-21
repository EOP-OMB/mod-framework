using Mod.Framework.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mod.Framework.Notifications.Domain.Entities
{
    public class NotificationAttachment : AuditedEntity
    {
        public int NotificationId { get; set; }
        public string FileName { get; set; }
        public byte[] Data { get; set; }

    }
}
