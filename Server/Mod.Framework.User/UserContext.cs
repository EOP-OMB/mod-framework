using Microsoft.EntityFrameworkCore;
using Mod.Framework.EfCore;
using System.Reflection;
using Mod.Framework.User.Entities;

namespace Mod.Framework.User
{
    public class UserContext : ModDbContext<UserContext>
    {
        #region Tables
        public DbSet<Employee> Employees { get; set; }
        public DbSet<EmployeeGroup> EmployeeGroups { get; set; }
        public DbSet<EmployeeAttribute> EmployeeAttributes { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<DepartmentMap> DepartmentMap { get; set; }
        #endregion

        public UserContext(DbContextOptions<UserContext> options)
        : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            modelBuilder.Entity<Employee>().HasQueryFilter(x => (x.Dept == "OMB" || x.Company == "OMB") && x.Inactive == false);

            base.OnModelCreating(modelBuilder);
        }
    }
}
