using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;

namespace Mod.Framework.WebApi.Extensions
{
    public static class ModOidcExtensions
    {
        public static IServiceCollection AddOidcAuthentication(this IServiceCollection services)
        {
            services.AddAuthentication(sharedOptions =>
            {
                sharedOptions.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.Authority = "https://adfs.autority.url/adfs";
                options.Audience = "adfsAudienceGuid"; 
                options.RequireHttpsMetadata = true;
            });

            return services;
        }
    }
}
