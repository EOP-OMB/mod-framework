using Microsoft.Extensions.DependencyInjection;
using System;
using Mod.Framework.HttpClientCalls;
using Mod.Framework.Max.Models;

namespace Mod.Framework.Max.Extensions
{
    public static class MaxDataExtensions
    {
        public static IServiceCollection AddMaxData(this IServiceCollection services, Action<WebDataOptions> options)
        {
            return services
                .AddSingleton<IMaxDataFactory<Agency>, MaxAgencyDataFactory>()
                .AddSingleton<IMaxDataFactory<Bureau>, MaxBureauDataFactory>()
                .AddSingleton<IMaxDataFactory<BudgetAccount>, MaxBudgetAccountDataFactory>()
                .Configure(options);
        }
    }
}
