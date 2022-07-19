using Mod.Framework.Max.WebDataServices;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;
using System;
using Mod.Framework.HttpClientCalls;
using Mod.Framework.Max.Models;
using Mod.Framework.Max.OData;

namespace Mod.Framework.Max
{
    public class MaxAgencyDataFactory : IMaxDataFactory<Agency>
    {
        readonly MaxUsersODataService Svc;
        readonly ILogger<MaxAgencyDataFactory> Logger;

        public MaxAgencyDataFactory(IOptions<WebDataOptions> optionsAccessor, ILogger<MaxAgencyDataFactory> logger)
        {
            var options = optionsAccessor.Value;
            Logger = logger;
            string serviceCredentials = options.Credentials;
            string serviceEndpoint = options.EndpointUrl ?? "";

            Svc = new MaxUsersODataService(serviceCredentials, serviceEndpoint);
        }

        public IEnumerable<Agency> GetAll()
        {
            try
            {
                var maxAgencies = AGENCY.GetAll(Svc.ServiceContext as MaxUserAndGroupEntities);
                return maxAgencies.Select(x => new Agency(x));
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, "MaxAgencyDataFactory.GetAll");
                throw;
            }
        }
    }
}
