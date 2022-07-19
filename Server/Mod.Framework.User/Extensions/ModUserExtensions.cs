using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Mod.Framework.Configuration;
using Mod.Framework.User.Interfaces;
using Mod.Framework.User.Repositories;

namespace Mod.Framework.User.Extensions
{
    public static class ModUserExtensions
    {
        public static IServiceCollection AddModUsers(this IServiceCollection services)
        {
            // Simplify and add to framework?
            services.AddDbContext<UserContext>(options =>
            {
                options
                      .UseSqlServer(ConfigurationManager.Secrets["MOD_User_ConnectionString"])
                      .EnableDetailedErrors();
            });

            services.AddTransient<IDepartmentRepository, DepartmentRepository>();
            services.AddTransient<IEmployeeRepository, EmployeeRepository>();
            services.AddTransient<IEmployeeAttributeRepository, EmployeeAttributeRepository>();

            return services;
        }
    }
}
