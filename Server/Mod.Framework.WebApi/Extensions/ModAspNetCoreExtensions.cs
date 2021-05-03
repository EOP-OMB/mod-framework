using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Mod.Framework.Runtime.Security;
using Mod.Framework.Runtime.Session;
using Mod.Framework.WebApi.Controllers;
using System;

namespace Mod.Framework.WebApi.Extensions
{
    public static class ModAspNetCoreExtensions
    {
        public static IServiceCollection AddModAspNetCore(this IServiceCollection services)
        {
            return AddModAspNetCore(services, null);
        }

        public static IServiceCollection AddModAspNetCore(this IServiceCollection services, Action<ModAspNetCoreOptions> options)
        {
            services.AddWsFedAuthentication();
            
            var domains = new string[] { "https://localhost:4200" };

            DomainSecurity.Configure(domains);

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                    builder =>
                    {
                        builder
                        .SetIsOriginAllowedToAllowWildcardSubdomains()
                        .WithOrigins(domains)
                        .AllowAnyMethod()
                        .AllowCredentials()
                        .AllowAnyHeader()
                        .Build();
                    });
            });

            var assembly = typeof(LoginController).Assembly;

            services.AddControllers()
                .AddApplicationPart(assembly)
                .AddNewtonsoftJson();

            services.AddHttpContextAccessor(); // see https://github.com/ekmsystems/serilog-enrichers-correlation-id

            services.AddSingleton<IPrincipalAccessor, ModPrincipalAccessor>();
            services.AddSingleton<IModSession, ModSession>();

            ModAspNetCoreOptions opt = new ModAspNetCoreOptions();
            
            options?.Invoke(opt);

            services.AddSingleton<IApplicationRoles>(opt.ApplicationRoles);

            return services;
        }

        public static IApplicationBuilder UseModAspNetCore(this IApplicationBuilder app)
        {
            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors();

            app.UseAuthentication();
            app.UseModPrincipal();
            app.UseAuthorization();
            app.UseStaticFiles();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            return app;
        }
    }
}
