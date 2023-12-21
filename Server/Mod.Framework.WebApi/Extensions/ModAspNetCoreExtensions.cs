using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.Extensions.DependencyInjection;
using Mod.Framework.DistributedAppSupport.Extensions;
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
            var domains = new string[] { "https://localhost.login.omb.gov:4200", "https://*.staging.omb.gov", "https://*.omb.gov", "https://*.sandbox.omb.gov", "https://*.test.omb.gov", "https://*.stage.omb.gov" };

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

            services.AddWsFedAuthentication();

            var assembly = typeof(LoginController).Assembly;

            services.AddControllers()
                .AddApplicationPart(assembly)
                .AddNewtonsoftJson();

            services.AddHttpContextAccessor(); // see https://github.com/ekmsystems/serilog-enrichers-correlation-id

            services.AddDistributedAppSupport("MOD_AppSupport_ConnectionString");

            services.AddSingleton<IPrincipalAccessor, ModPrincipalAccessor>();
            services.AddSingleton<IModSession, ModSession>();

            ModAspNetCoreOptions opt = new ModAspNetCoreOptions();
            
            options?.Invoke(opt);

            services.AddSingleton<IApplicationRoles>(opt.ApplicationRoles);

            return services;
        }

        public static IApplicationBuilder UseModAspNetCore(this IApplicationBuilder app)
        {
            app.UseCors();

            var forwardingOptions = new ForwardedHeadersOptions()
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            };
            forwardingOptions.KnownNetworks.Clear(); //its loopback by default
            forwardingOptions.KnownProxies.Clear();

            app.UseForwardedHeaders(forwardingOptions);

            //app.UseHttpsRedirection();

            app.UseRouting();

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
