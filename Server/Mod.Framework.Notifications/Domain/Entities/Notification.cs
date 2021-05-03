using Mod.Framework.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Mod.Framework.Notifications.Domain.Entities
{
    public class Notification : AuditedEntity
    {
        public int NotificationTemplateId { get; set; }
        public int Type { get; set; }
        public string Recipient { get; set; }
        public string Cc { get; set; }
        public string Bcc { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
        public DateTime? SentDateTime { get; set; }
        public bool IsAnnouncement { get; set; }

        public virtual NotificationTemplate NotificationTemplate { get; set; }
        public virtual ICollection<NotificationStatus> NotificationStatuses { get; set; }

        public void UpdateCurrentStatus(int status, string message = null)
        {
            if (this.NotificationStatuses == null)
                this.NotificationStatuses = new List<NotificationStatus>();

            this.NotificationStatuses.Add(new NotificationStatus()
            {
                Status = status,
                Message = message
            });
        }

        public int Status
        {
            get
            {
                var latestStatus = NotificationStatuses.OrderByDescending(x => x.CreatedTime).First();

                return latestStatus.Status;
            }
        }
    }
}
