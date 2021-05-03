using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mod.Framework.User.Entities;

namespace Mod.PortfolioManager.Infrastructure.EfCore.Configurations
{
    public class DepartmentMapConfiguration : IEntityTypeConfiguration<DepartmentMap>
    {
        public void Configure(EntityTypeBuilder<DepartmentMap> builder)
        {
            SeedData(builder);
        }

        private void SeedData(EntityTypeBuilder<DepartmentMap> builder)
        {
            // Seed Department Map table
        }
    }
}
