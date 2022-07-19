using Mod.Framework.Max;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;
using System;
using Mod.Framework.HttpClientCalls;
using Mod.Framework.Max.OData;
using Mod.Framework.Max.WebDataServices;

namespace Mod.Framework.Max
{
    public class MaxBudgetAccountDataFactory : IMaxDataFactory<Models.BudgetAccount>
    {
        readonly BudgetAccountODataService Svc;
        readonly ILogger<MaxBudgetAccountDataFactory> Logger;

        public MaxBudgetAccountDataFactory(IOptions<WebDataOptions> optionsAccessor, ILogger<MaxBudgetAccountDataFactory> logger)
        {
            var options = optionsAccessor.Value;
            Logger = logger;
            string serviceCredentials = options.Credentials;
            string serviceEndpoint = options.EndpointUrl ?? "";

            Svc = new BudgetAccountODataService(serviceCredentials, serviceEndpoint);
        }

        public IEnumerable<Models.BudgetAccount> GetAll()
        {
            try
            {
                var maxAgencies = WebDataServices.VPMA330B_FILTERED_ACCT_LIST.GetAll(Svc.ServiceContext as BudgetAccountDataEntities);
                return maxAgencies.Select(x => new Models.BudgetAccount(x));
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, "MaxBudgetAccountDataFactory.GetAll");
                throw;
            }
        }
    }
}
