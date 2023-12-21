using Mod.Framework.Notifications.Domain.Entities;

namespace Mod.Framework.Notifications
{
    public class NotificationTemplateProfile : AutoMapper.Profile
    {
        public NotificationTemplateProfile()
        {
            CreateMap<NotificationTemplate, NotificationTemplateDto>()
                .ForMember(dto => dto.Enabled, opt => opt.MapFrom(src => src.IsEnabled))
                .ReverseMap();
        }
    }
}
