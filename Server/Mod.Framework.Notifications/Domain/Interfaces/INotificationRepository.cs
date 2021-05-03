using Mod.Framework.Domain.Repositories;
using Mod.Framework.Notifications.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Notifications.Domain.Interfaces
{
    public interface INotificationRepository : IRepository<Notification>
    {
    }
}
