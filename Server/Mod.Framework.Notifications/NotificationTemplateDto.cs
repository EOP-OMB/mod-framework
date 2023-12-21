using Mod.Framework.Application;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mod.Framework.Notifications
{
    public class NotificationTemplateDto : AuditedDtoBase
    {
        public string Type { get; set; }
        public string Name { get; set; }
        public string RecipientType { get; set; }
        public string RecipientGroup { get; set; }
        public string Subject { get; set; }
        public string Frequency { get; set; }
        public string Body { get; set; }
        public DateTime? NextRunDate { get; set; }
        public DateTime? LastRunDate { get; set; }
        public string LastRunStatus { get; set; }
        public bool IncludeCc { get; set; }
        public string Cc { get; set; }
        public bool Enabled { get; set; }
        public string Application { get; set; }

        public Dictionary<string, string> TemplateFields { get; set; }
    }
}
