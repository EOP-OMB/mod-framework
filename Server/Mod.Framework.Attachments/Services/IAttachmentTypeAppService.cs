using Mod.Framework.Application;
using Mod.Framework.Attachments.Entities;
using Mod.Framework.Attachments.Dtos;

namespace Mod.Framework.Attachments.Services
{
    public interface IAttachmentTypeAppService : ICrudAppService<AttachmentTypeDto, AttachmentType>
    {
    }
}
