﻿using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Notifications.Extensions
{
    public static class ModNotificationExtensions
    {
        public static IServiceCollection AddModNotifications(this IServiceCollection services, Action<ModNotificationOptions> options)
        {
            ModNotificationOptions opt = new ModNotificationOptions();

            options.Invoke(opt);

            services.AddSingleton<IOptions<ModNotificationOptions>>(Options.Create(opt));
                
            return services;
        }
    }
}
