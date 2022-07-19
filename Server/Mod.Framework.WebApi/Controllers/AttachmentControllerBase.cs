using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Mod.Framework.Application;
using Mod.Framework.Attachments.Dtos;
using Mod.Framework.Attachments.Entities;
using Mod.Framework.Attachments.Interfaces;
using Mod.Framework.Attachments.Services;
using Mod.Framework.Domain.Entities;
using Mod.Framework.WebApi.Controllers;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Mod.Framework.WebApi.Controllers
{
    public abstract class AttachmentControllerBase<TDto, TAttachment> : AttachmentControllerBase<TDto, TAttachment, int> where TAttachment : IAttachment where TDto : IAttachmentDto
    {
        public AttachmentControllerBase(ILogger logger, ICrudAppService<TDto, TAttachment, int> service) : base(logger, service)
        {
        }
    }

    public abstract class AttachmentControllerBase<TDto, TAttachment, TPrimaryKey> : ModControllerBase where TAttachment : IAttachment where TDto : IAttachmentDto
    { 
        public new ICrudAppService<TDto, TAttachment, TPrimaryKey> Service { get; private set; }

        public AttachmentControllerBase(ILogger logger, ICrudAppService<TDto, TAttachment, TPrimaryKey> service) : base(logger, service)
        {
            Service = service;
        }

        [HttpPost()]
        public virtual ActionResult Upload(List<IFormFile> files, [FromForm] string attachedToGuid, [FromForm] string uid, [FromForm] int foreignKey)
        {
            if (files != null)
            {
                if (files[0].Length > 0 && !string.IsNullOrEmpty(attachedToGuid) && !string.IsNullOrEmpty(uid))
                {
                    string fileName = Path.GetFileName(files[0].FileName);
                    string fileExtension = Path.GetExtension(fileName);

                    IAttachmentDto attachment = new AttachmentDto()
                    {
                        AttachedToGuid = new System.Guid(attachedToGuid),
                        Name = fileName,
                        ContentType = files[0].ContentType,
                        Size = files[0].Length,
                        Uid = new System.Guid(uid),
                        ForeignKey = foreignKey == 0 ? null : (int?)foreignKey
                    };

                    using (MemoryStream target = new MemoryStream())
                    {
                        files[0].CopyTo(target);
                        attachment.Content = target.ToArray();
                    }

                    var newAttachment = Service.Create((TDto)attachment);

                    return Json(newAttachment);
                }
            }

            return BadRequest();
        }

        [HttpPost()]
        public virtual ActionResult Remove([FromForm] string fileNames, [FromForm] string uid)
        {
            if (!string.IsNullOrEmpty(uid))
            {
                var dto = Service.GetBy(x => x.Uid == new System.Guid(uid)).Single();
                Service.Delete(dto);

                return Ok();
            }

            return BadRequest();
        }

        [HttpGet("{uid}")]
        public IActionResult Download(string uid)
        {
            if (!string.IsNullOrEmpty(uid))
            {
                var dto = Service.GetBy(x => x.Uid == new System.Guid(uid)).Single();

                return File(dto.Content, dto.ContentType, dto.Name);
            }

            return BadRequest();
        }
    }
}
