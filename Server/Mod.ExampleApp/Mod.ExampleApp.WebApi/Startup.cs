using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

using AutoMapper;

using Mod.Framework.Dependency;
using Mod.ExampleApp.Application.Services;
using Mod.ExampleApp.Domain.Interfaces;
using Mod.ExampleApp.EfCore.Repositories;
using Mod.ExampleApp.EfCore;
using Mod.Framework.Configuration;
using Mod.Framework.AutoMapper;
using IObjectMapper = Mod.Framework.Application.ObjectMapping.IObjectMapper;
using Mod.Framework.Serilog;
using Mod.Framework.WebApi.Extensions;
using Mod.Framework.Runtime.Security;

namespace Mod.ExampleApp.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var applicationRoles = new ApplicationRoles();

            applicationRoles.Roles.Add(new Role("Admin", "SG-SharePoint-Administrators", "SOME OTHER GROUP"));

            services.AddModAspNetCore(options =>
            {
                options.ApplicationRoles = applicationRoles;
            });

            // Simplify and add to framework?
            services.AddDbContext<ExampleAppContext>(options =>
            {
                options
                      .UseSqlServer(ConfigurationManager.Secrets["MOD.ExampleApp.ConnectionString"])
                      .EnableDetailedErrors();
                      //.UseLazyLoadingProxies();
            });

            services.AddSerilogServices();

            services.AddModFramework();

            // TODO: Automatically register AutoMapper and configure maps
            // Looks for a AutoMapper.Profile class within the same assembly as Startup
            services.AddAutoMapper(typeof(Startup).Assembly);

            services.AddSingleton<IObjectMapper, AutoMapperObjectMapper>();

            // TODO:  Automatically register transient dependencies
            services.AddTransient<IOrderAppService, OrderAppService>();
            services.AddTransient<IOrderRepository, OrderRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseModAspNetCore();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
