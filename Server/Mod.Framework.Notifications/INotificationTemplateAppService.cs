using Microsoft.Extensions.Logging;
using Mod.Framework.Application;
using Mod.Framework.Application.ObjectMapping;
using Mod.Framework.Domain.Repositories;
using Mod.Framework.Notifications.Domain.Entities;
using Mod.Framework.Notifications.Domain.Interfaces;
using Mod.Framework.Runtime.Session;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mod.Framework.Notifications
{
    public interface INotificationTemplateAppService : ICrudAppService<NotificationTemplateDto, NotificationTemplate>
    {
        Dictionary<string, string> GetEmailFieldsDef(Dictionary<string, string> dict);
    }
}
