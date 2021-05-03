using Microsoft.Extensions.DependencyInjection;
using Mod.Framework.Notifications.Domain.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Notifications.Dependency
{
    public static class NotificationServiceCollectionExtension
    {
        public static IServiceCollection AddModNotifications(this IServiceCollection services)
        {
            services.AddTransient<INotificationDomService, NotificationDomService>();

            return services;
        }
    }
}
