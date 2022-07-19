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
                options.Authority = "https://adfs.omb.gov/adfs";
                options.Audience = "d26b0eb6-6c0d-4292-8419-f3ea86a4f338"; //"90d55aa7-81f7-46f7-9454-9a845cfb407e";
                options.RequireHttpsMetadata = true;
            });

            return services;
        }
    }
}
