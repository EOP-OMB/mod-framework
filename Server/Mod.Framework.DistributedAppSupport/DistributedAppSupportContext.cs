using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Logging;
using Mod.Framework.DistributedAppSupport.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mod.Framework.DistributedAppSupport
{
    public class DistributedAppSupportContext : DbContext
    {
        // in PMC: dotnet ef  migrations add InitialCreate --project "..\..\max ecosystem\distributedappsupport" --startup-project ExampleCasWebApi

        string ConnectionString { get; set; }
        ILoggerFactory LoggerFactory { get; set; }


        public DbSet<DataProtection> DataProtection { get; set; }
        public DbSet<DistributedCache> DistributedCache { get; set; }

        public DistributedAppSupportContext()
        {

        }

        public DistributedAppSupportContext(DbContextOptions<DistributedAppSupportContext> options) : base(options)
        {
        }

        public DistributedAppSupportContext(string connectionString)
        {
            ConnectionString = connectionString;
        }

        public DistributedAppSupportContext(string connectionString, ILoggerFactory loggerFactory)
        {
            LoggerFactory = loggerFactory;
            ConnectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(ConnectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //This will singularize all table names
            foreach (IMutableEntityType entityType in modelBuilder.Model.GetEntityTypes())
            {
                entityType.SetTableName(entityType.DisplayName());
            }
        }
    }
}
