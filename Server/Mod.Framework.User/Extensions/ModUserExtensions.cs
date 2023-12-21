using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
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
                      .UseSqlServer(ConfigurationManager.Secrets["MOD_User_ConnectionString"], o => o.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery))
                      .ConfigureWarnings(w => w.Throw(RelationalEventId.MultipleCollectionIncludeWarning))
                      .EnableDetailedErrors();
            });

            services.AddTransient<IDepartmentRepository, DepartmentRepository>();
            services.AddTransient<IEmployeeRepository, EmployeeRepository>();
            services.AddTransient<IEmployeeAttributeRepository, EmployeeAttributeRepository>();

            return services;
        }
    }
}
