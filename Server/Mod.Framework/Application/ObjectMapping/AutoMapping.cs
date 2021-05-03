using Mod.Framework.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mod.Framework.Application.ObjectMapping
{
    public class AutoMapping : AutoMapper.Profile
    {
        public AutoMapping()
        {
            CreateMap<AuditedEntity, AuditedDtoBase>()
                .IncludeAllDerived();

            CreateMap<AuditedDtoBase, AuditedEntity>()
                .ForMember(x => x.CreatedBy, opt => opt.Ignore())
                .ForMember(x => x.CreatedTime, opt => opt.Ignore())
                .ForMember(x => x.ModifiedBy, opt => opt.Ignore())
                .ForMember(x => x.ModifiedTime, opt => opt.Ignore())
                .IncludeAllDerived();

            CreateMap<FullAuditedEntity, AuditedDtoBase>()
                .IncludeAllDerived();

            CreateMap<AuditedDtoBase, FullAuditedEntity>()
                .ForMember(x => x.CreatedBy, opt => opt.Ignore())
                .ForMember(x => x.CreatedTime, opt => opt.Ignore())
                .ForMember(x => x.ModifiedBy, opt => opt.Ignore())
                .ForMember(x => x.ModifiedTime, opt => opt.Ignore())
                .IncludeAllDerived();

        }
    }
}
