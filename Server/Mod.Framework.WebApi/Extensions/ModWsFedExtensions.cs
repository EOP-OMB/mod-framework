using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.WsFederation;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System.Threading.Tasks;

namespace Mod.Framework.WebApi.Extensions
{
    public static class ModWsFedExtensions
    {
        public static IServiceCollection AddWsFedAuthentication(this IServiceCollection services)
        {
            services.AddAuthentication(sharedOptions =>
            {
                sharedOptions.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                sharedOptions.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                sharedOptions.DefaultChallengeScheme = WsFederationDefaults.AuthenticationScheme;
                sharedOptions.DefaultSignOutScheme = WsFederationDefaults.AuthenticationScheme;
            })
            .AddWsFederation(options =>
            {
                options.Wtrealm = "URN:WSFEDAPP"; 
                options.MetadataAddress = "https://adfs.omb.gov/federationmetadata/2007-06/federationmetadata.xml";
                options.CorrelationCookie.SecurePolicy = CookieSecurePolicy.Always;
                options.Events = new WsFederationEvents()
                {
                    // These are more for interest than anything else
                    OnMessageReceived = context =>
                    {
                        //logger.LogInformation($"WSFED MessageReceived: {context.ProtocolMessage.Wresult}");
                        return Task.FromResult(0);
                    },
                    OnRedirectToIdentityProvider = context =>
                    {
                        //logger.LogInformation($"WSFED RedirectToIdentityProvider: {context.ProtocolMessage.ToString()}");

                        return Task.FromResult(0);
                    },
                    OnSecurityTokenReceived = context =>
                    {
                        //logger.LogInformation($"WSFED SecurityTokenReceived: {context.ProtocolMessage.ToString()}");
                        return Task.FromResult(0);
                    },
                    OnSecurityTokenValidated = context =>
                    {
                        //logger.LogInformation($"WSFED SecurityTokenValidated: {context.ProtocolMessage.ToString()}");
                        return Task.FromResult(0);
                    },
                    OnAuthenticationFailed = context =>
                    {
                        //logger.LogInformation($"WSFED AuthenticationFailed: {context.ProtocolMessage.ToString()}");
                        return Task.FromResult(0);
                    },
                    OnRemoteSignOut = context =>
                    {
                        //logger.LogInformation($"WSFED RemoteSignOut: {context.ProtocolMessage.ToString()}");
                        return Task.FromResult(0);
                    },
                    OnRemoteFailure = context =>
                    {
                        //logger.LogInformation($"WSFED RemoteFailure: {context.Failure.Message}");
                        return Task.FromResult(0);
                    }
                };
            })
            .AddCookie(options =>
            {
                options.Cookie.SameSite = SameSiteMode.None;
                options.Cookie.HttpOnly = true;
                options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
                options.CookieManager = new ChunkingCookieManager();
            });

            return services;
        }
    }
}
