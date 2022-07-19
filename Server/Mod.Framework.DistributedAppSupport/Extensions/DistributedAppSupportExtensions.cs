using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.DataProtection.KeyManagement;
using Microsoft.AspNetCore.DataProtection.XmlEncryption;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Mod.Framework.Configuration;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection;

namespace Mod.Framework.DistributedAppSupport.Extensions
{
    public static class DistributedAppSupportExtensions
    {
        /// <summary>
        /// If the named connection string exists as a secret, configure SQL-based cache, session, auth ticket and key store, suitable for a load-balanced environment.
        /// If not, just use the in-memory/on-disk versions of these, suitable for use in a debugger.
        /// </summary>
        /// <param name="services"></param>
        /// <param name="connectionStringName"></param>
        /// <param name="idleTimeoutMinutes"></param>
        /// <returns></returns>
        public static IServiceCollection AddDistributedAppSupport(this IServiceCollection services, string connectionStringName, int idleTimeoutMinutes = 30)
        {

            string connectionString = string.Empty;
            try
            {
                connectionString = ConfigurationManager.Secrets[connectionStringName];
            }
            catch (Exception)
            {
                // missing connection string is handled below
            }

            // If a ConnectionString is configured, use the database as distributed cache and the distributed xml key repository

            if (!string.IsNullOrEmpty(connectionString))
            {
                services.AddDbContext<DistributedAppSupportContext>(options =>
                {
                    options
                          .UseSqlServer(connectionString)
                          .EnableDetailedErrors();
                });

                // Create the tables if needed.  All we need is an empty database and a connection string that gives
                // db_datareader, db_datawriter, db_ddladmin rights
                using (var context = new DistributedAppSupportContext(connectionString))
                {
                    context.Database.Migrate();
                }

                // I didn't want to hardwire the name here - but figuring out the table name is non-trivial, hence the explicit [Table()] attribute on the model
                var distributedCacheTableName = ((TableAttribute)typeof(Entities.DistributedCache).GetCustomAttribute(typeof(TableAttribute))).Name;

                services.AddDistributedSqlServerCache(options =>
                {
                    options.ConnectionString = connectionString;
                    options.SchemaName = "dbo";
                    options.TableName = distributedCacheTableName;
                });


                services.Configure<KeyManagementOptions>(options =>
                {
                    options.XmlRepository = new DistributedSqlKeyStore(connectionString);
                    // sdc: It's possible to encrypt the keys that decrypt the session/login cookies here.
                    // The only mechanism that would seem to apply (in a multi-platform environment) is
                    // CertificateXmlEncryptor.  I'm just using the NullXmlEncryptor here because using
                    // the certificate mechanism just kicks the can down the same road; you'd still have
                    // to expose the private key of the encryption certificate.  But it's a choice that
                    // could be reconsidered.  See
                    // https://docs.microsoft.com/en-us/aspnet/core/security/data-protection/implementation/key-encryption-at-rest
                    options.XmlEncryptor = new NullXmlEncryptor();
                });

                services.AddDataProtection();
            }
            else
            {
                // Use in-memory cache, and use the default data protection mechanism.
                // Both are fine for running in the debugger.
                services.AddDistributedMemoryCache();
            }

            // The ticket store will use whichever distributed cache was configured above.

            return services
                .AddDistributedCacheTicketStore(options =>
                {
                    options.TimeoutMinutes = idleTimeoutMinutes;
                })
                .AddSingleton<IPostConfigureOptions<CookieAuthenticationOptions>, PostConfigureCookieAuthenticationOptions>();
        }
    }
}
