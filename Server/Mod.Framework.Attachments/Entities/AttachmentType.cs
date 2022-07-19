using Mod.Framework.Domain.Entities.Auditing;
using System.Collections.Generic;

namespace Mod.Framework.Attachments.Entities
{
    public class AttachmentType : FullAuditedEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string AllowedFileTypes { get; set; }

        public override string ToString()
        {
            return this.Name;
        }
    }
}
