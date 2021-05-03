using AutoMapper;
using AutoMapper.Configuration.Annotations;
using Mod.Framework.Application;
using Mod.Framework.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Application
{
    public abstract class AuditedDtoBase : AuditedDtoBase<int>
    {

    }

    public abstract class AuditedDtoBase<TPrimaryKey> : DtoBase<TPrimaryKey>
    {
        public DateTime CreatedTime { get; set; }
        public string CreatedBy { get; set; }
        public DateTime ModifiedTime { get; set; }
        public string ModifiedBy { get; set; }
    }
}
