using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.Extensions.DependencyInjection;
using Mod.Framework.DistributedAppSupport.Options;
using System;


namespace Mod.Framework.DistributedAppSupport.Extensions
{
    public static class DistributedCacheTicketStoreExtensions
    {
        public static IServiceCollection AddDistributedCacheTicketStore(this IServiceCollection services, Action<DistributedCacheTicketStoreOptions> options)
        {
            return services
                .AddSingleton<ITicketStore, DistributedCacheTicketStore>()
                .Configure(options);
        }
    }
}
