using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Mod.Framework.DistributedAppSupport.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mod.Framework.DistributedAppSupport
{
    /// <summary>
    /// Implements a ticket store using an abstract distributed cache (e.g., sql server distributed cache or memory cache).
    /// Patterned after https://github.com/aspnet/Security/issues/1034
    /// Also https://stackoverflow.com/questions/46547076/authentication-cookie-stops-working-when-restarting-server-despite-using-iticket
    /// and  https://stackoverflow.com/questions/45914143/aspnet-core-cookieauthentication-with-injected-sessionstore
    /// 
    /// Usage: to use this, here are the steps: 
    /// 
    /// In Startup.cs/ConfigureServices
    /// 
    /// services.AddSingleton<ITicketStore, DistributedCacheTicketStore>();
    /// 
    /// tells the DI system that references to ITicketStore will be satisfied by this class.
    /// 
    /// services.AddDistributedSqlServerCache(options =>
    ///  { 
    ///     options.ConnectionString = @"Server=spc-sql-02\carson_sda;Database=DistributedCache;integrated security=true;";
    ///     options.SchemaName = "dbo";
    ///     options.TableName = "CollectVNext";
    ///  });
    ///  
    /// Creates a service of type IDistributedCache that will be used to satisfy the DistributedCacheTicketStore's constructor.
    /// 
    /// Don't set the SessionStore property in the 
    /// 
    /// services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    ///     .AddCookie(options =>
    ///     
    /// section, because the SessionStore hasn't been materialized yet.  Instead, add a PostConfiguration step that adds the 
    /// DistributedCacheTicketStore to the cookie options:
    /// 
    /// services.AddSingleton<IPostConfigureOptions<CookieAuthenticationOptions>, TicketStore.PostConfigureCookieAuthenticationOptions>();
    ///  
    /// which takes a dependency-injected ITicketStore as its constructor parameter.
    /// 
    /// </summary>
    public class DistributedCacheTicketStore : ITicketStore
    {
        private readonly DistributedCacheTicketStoreOptions Options;
        private readonly IDistributedCache DistributedCache;
        private readonly IDataProtector DataProtector;
        private readonly ILogger Logger;

        public DistributedCacheTicketStore(
            IOptions<DistributedCacheTicketStoreOptions> optionsAccessor,
            IDistributedCache distributedCache,
            IDataProtectionProvider dataProtectionProvider,
            ILogger logger)
        {
            Options = optionsAccessor.Value;
            DistributedCache = distributedCache;
            DataProtector = dataProtectionProvider.CreateProtector(GetType().FullName);
            Logger = logger;
            Logger.LogDebug("Created distributed cache ticket store with options {@Options}", Options);
        }

        public DistributedCacheTicketStore(
            IOptions<DistributedCacheTicketStoreOptions> optionsAccessor,
            IDistributedCache distributedCache,
            IDataProtectionProvider dataProtectionProvider)
        {
            Options = optionsAccessor.Value;
            DistributedCache = distributedCache;
            DataProtector = dataProtectionProvider.CreateProtector(GetType().FullName);
        }

        public async Task<string> StoreAsync(AuthenticationTicket ticket)
        {
            var key = "AuthTicket-" + Guid.NewGuid().ToString();
            var ticketBytes = DataProtector.Protect(TicketSerializer.Default.Serialize(ticket));
            await DistributedCache.SetAsync(key, ticketBytes, new DistributedCacheEntryOptions { SlidingExpiration = TimeSpan.FromMinutes(Options.TimeoutMinutes) });
            return key;
        }

        public async Task RenewAsync(string key, AuthenticationTicket ticket)
        {
            var ticketBytes = DataProtector.Protect(TicketSerializer.Default.Serialize(ticket));
            await DistributedCache.SetAsync(key, ticketBytes, new DistributedCacheEntryOptions { SlidingExpiration = TimeSpan.FromMinutes(Options.TimeoutMinutes) });
        }

        public async Task<AuthenticationTicket> RetrieveAsync(string key)
        {
            var ticketBytes = await DistributedCache.GetAsync(key);
            if (ticketBytes == null) return null;
            var ticket = TicketSerializer.Default.Deserialize(DataProtector.Unprotect(ticketBytes));
            return ticket;
        }

        public async Task RemoveAsync(string key)
        {
            var ticketBytes = await DistributedCache.GetStringAsync(key);
            if (ticketBytes != null)
            {
                await DistributedCache.RemoveAsync(key);
            }
        }
    }
}
