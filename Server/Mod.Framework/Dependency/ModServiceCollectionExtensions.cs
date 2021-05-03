using AutoMapper;

using Microsoft.Extensions.DependencyInjection;
using Mod.Framework.Application.ObjectMapping;
using IObjectMapper = Mod.Framework.Application.ObjectMapping.IObjectMapper;

namespace Mod.Framework.Dependency
{
    public static class ModServiceCollectionExtensions
    {
        public static IServiceCollection AddModFramework(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(ModServiceCollectionExtensions).Assembly);

            services.AddSingleton<IObjectMapper, AutoMapperObjectMapper>();

            return services;
        }
    }
}
