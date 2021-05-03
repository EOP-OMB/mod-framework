using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Mod.Framework.Runtime.Security;
using Mod.Framework.WebApi.Middleware;

namespace Mod.Framework.WebApi.Extensions
{
    public static class ModPrincipalExtensions
    {
        public static IServiceCollection AddModPrincipal(this IServiceCollection services)
        {
            return services.AddScoped<IModPrincipal, ModPrincipal>();
        }

        public static IApplicationBuilder UseModPrincipal(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ModPrincipalMiddleware>();
        }
    }
}
