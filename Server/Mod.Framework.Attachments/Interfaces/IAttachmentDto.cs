using Mod.Framework.Application;
using System;
using System.Collections.Generic;

namespace Mod.Framework.Attachments.Interfaces
{
    public interface IAttachmentDto : IDto
    {
        Guid Uid { get; set; }
        string Name { get; set; }
        string ContentType { get; set; }
        byte[] Content { get; set; }
        long Size { get; set; }
        string Type { get; set; }

        Guid AttachedToGuid { get; set; }
    }
}
