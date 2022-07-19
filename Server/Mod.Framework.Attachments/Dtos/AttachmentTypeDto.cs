using Mod.Framework.Application;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Attachments.Dtos
{
    public class AttachmentTypeDto : DtoBase
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public List<string> AllowedFileTypes { get; set; }
    }
}
