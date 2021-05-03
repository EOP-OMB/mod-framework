using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mod.Framework.User.Entities;

namespace Mod.PortfolioManager.Infrastructure.EfCore.Configurations
{
    public class EmployeeConfiguration : IEntityTypeConfiguration<Employee>
    {
        public void Configure(EntityTypeBuilder<Employee> builder)
        {
            builder.Property(e => e.Upn).HasMaxLength(255);
            builder.Property(e => e.SamAccountName).HasMaxLength(255);
            builder.Property(e => e.Type).HasMaxLength(50);
            builder.Property(e => e.GivenName).HasMaxLength(50);
            builder.Property(e => e.DisplayName).HasMaxLength(255);
            builder.Property(e => e.MiddleName).HasMaxLength(50);
            builder.Property(e => e.Surname).HasMaxLength(50);
            builder.Property(e => e.StreetAddress).HasMaxLength(255);
            builder.Property(e => e.City).HasMaxLength(50);
            builder.Property(e => e.PostalCode).HasMaxLength(25);
            builder.Property(e => e.Title).HasMaxLength(255);
            builder.Property(e => e.OfficePhone).HasMaxLength(25);
            builder.Property(e => e.MobilePhone).HasMaxLength(25);
            builder.Property(e => e.EmailAddress).HasMaxLength(255);

            builder.Property(e => e.Id)
                .ValueGeneratedNever();

            builder.HasMany(e => e.DirectReports)
                 .WithOne(e => e.ReportsTo)
                 .HasForeignKey(e => e.ReportsToEmployeeId)
                 .OnDelete(DeleteBehavior.NoAction);

            builder.HasMany(e => e.Groups)
                .WithOne(eg => eg.Employee)
                .HasForeignKey(eg => eg.EmployeeId);

            builder.Ignore(e => e.ManagerName);
        }

    }
}
