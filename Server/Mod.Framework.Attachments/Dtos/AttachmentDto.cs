using Mod.Framework.Application;
using Mod.Framework.Attachments.Interfaces;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Attachments.Dtos
{
    public class AttachmentDto : DtoBase, IAttachmentDto
    {
        public Guid Uid { get; set; }
        public string Name { get; set; }
        public string ContentType { get; set; }
        [JsonIgnore]
        public byte[] Content { get; set; }
        public long Size { get; set; }
        public string Type { get; set; }

        public int? ForeignKey { get; set; }
        public Guid AttachedToGuid { get; set; }
    }
}
