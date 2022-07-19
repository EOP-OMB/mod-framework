using Mod.Framework.Attachments.Interfaces;
using Mod.Framework.Domain.Entities;
using Mod.Framework.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;

namespace Mod.Framework.Attachments.Entities
{
    public abstract class AttachmentBase : FullAuditedEntity, IAttachment
    {
        public Guid Uid { get; set; }
        public string Name { get; set; }
        public string ContentType { get; set; }
        public byte[] Content { get; set; }
        public long Size { get; set; }

        public Guid AttachedToGuid { get; set; }

        public string AttachmentType { get; set; }
    }
}
