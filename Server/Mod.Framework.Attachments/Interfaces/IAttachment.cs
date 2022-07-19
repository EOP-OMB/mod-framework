using Mod.Framework.Domain.Entities;
using System;

namespace Mod.Framework.Attachments.Interfaces
{
    public interface IAttachment : IEntity
    {
        Guid Uid { get; set; }
        string Name { get; set; }
        string ContentType { get; set; }
        byte[] Content { get; set; }
        long Size { get; set; }

        Guid AttachedToGuid { get; set; }

        string AttachmentType { get; set; }
    }
}
