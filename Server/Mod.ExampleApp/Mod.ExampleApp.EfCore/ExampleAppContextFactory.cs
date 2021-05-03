using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Mod.Framework.EfCore;
using Mod.Framework.Runtime.Session;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.ExampleApp.EfCore
{
    public class ExampleAppContextFactory : IDesignTimeDbContextFactory<ExampleAppContext>
    {
        public ExampleAppContext CreateDbContext(string[] args)
        {
            var connectionString = Environment.GetEnvironmentVariable("MOD.ExampleApp.ConnectionString");

            var optionsBuilder = new DbContextOptionsBuilder<ExampleAppContext>();
            optionsBuilder.UseSqlServer(connectionString);
            
            return new ExampleAppContext(optionsBuilder.Options, NullModSession.Instance);
        }
    }
}
