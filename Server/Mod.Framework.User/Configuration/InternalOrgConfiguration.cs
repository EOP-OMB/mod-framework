using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mod.Framework.User.Entities;

namespace Mod.PortfolioManager.Infrastructure.EfCore.Configurations
{
    public class InternalOrgConfiguration : IEntityTypeConfiguration<InternalOrg>
    {
        public void Configure(EntityTypeBuilder<InternalOrg> builder)
        {
            SeedData(builder);
        }
        private void SeedData(EntityTypeBuilder<InternalOrg> builder)
        {
            // Seed InternalOrg Data
        }
    }
}
