using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mod.ExampleApp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.ExampleApp.EfCore.Configurations
{
    public class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Ignore(o => o.Total);
        }
    }
}
