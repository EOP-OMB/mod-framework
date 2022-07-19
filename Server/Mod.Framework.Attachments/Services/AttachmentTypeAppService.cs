using Microsoft.Extensions.Logging;
using Mod.Framework.Application;
using Mod.Framework.Application.ObjectMapping;
using Mod.Framework.Attachments.Entities;
using Mod.Framework.Attachments.Interfaces;
using Mod.Framework.Attachments.Dtos;
using Mod.Framework.Domain.Repositories;
using Mod.Framework.Runtime.Session;
using System.Collections.Generic;

namespace Mod.Framework.Attachments.Services
{
    public class AttachmentTypeAppService : CrudAppService<AttachmentTypeDto, AttachmentType>, IAttachmentTypeAppService
    {
        public AttachmentTypeAppService(IAttachmentTypeRepository repository, IObjectMapper objectMapper, ILogger<IAppService> logger, IModSession session) : base(repository, objectMapper, logger, session)
        {
        }
    }
}
