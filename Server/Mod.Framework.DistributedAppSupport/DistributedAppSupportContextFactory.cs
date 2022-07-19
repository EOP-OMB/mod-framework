using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mod.Framework.DistributedAppSupport
{
    public class DistributedAppSupportContextFactory : IDesignTimeDbContextFactory<DistributedAppSupportContext>
    {
        public DistributedAppSupportContext CreateDbContext(string[] args)
        {
            var connectionString = Environment.GetEnvironmentVariable("MOD_AppSupport_ConnectionString");

            var optionsBuilder = new DbContextOptionsBuilder<DistributedAppSupportContext>();
            optionsBuilder.UseSqlServer(connectionString);

            return new DistributedAppSupportContext(optionsBuilder.Options);
        }
    }
}
