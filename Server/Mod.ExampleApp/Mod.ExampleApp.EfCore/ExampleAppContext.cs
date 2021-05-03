using Microsoft.EntityFrameworkCore;
using Mod.ExampleApp.Domain.Entities;
using Mod.Framework.EfCore;
using Mod.Framework.Runtime.Session;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace Mod.ExampleApp.EfCore
{
    public class ExampleAppContext : ModDbContext<ExampleAppContext>
    {
        #region Tables
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        #endregion

        public ExampleAppContext(DbContextOptions<ExampleAppContext> options, IModSession session)
            : base(options)
        {
            ModSession = session;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) 
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            base.OnModelCreating(modelBuilder);
        }
    }
}
