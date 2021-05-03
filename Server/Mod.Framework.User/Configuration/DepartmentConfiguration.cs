using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mod.Framework.User.Entities;
using static Mod.Framework.User.Entities.Department;

namespace Mod.PortfolioManager.Infrastructure.EfCore.Configurations
{
    public class DepartmentConfiguration : IEntityTypeConfiguration<Department>
    {
        public void Configure(EntityTypeBuilder<Department> builder)
        {
            builder.HasMany(e => e.Children)
                 .WithOne(e => e.Parent)
                 .HasForeignKey(e => e.ParentDepartmentId)
                 .OnDelete(DeleteBehavior.NoAction);

            SeedData(builder);
        }

        private void SeedData(EntityTypeBuilder<Department> builder)
        {
            // Seed Department Data
        }
    }
}
