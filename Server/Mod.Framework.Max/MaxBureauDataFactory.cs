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
    public class MaxBureauDataFactory : IMaxDataFactory<Bureau>
    {
        readonly MaxUsersODataService Svc;
        readonly ILogger<MaxBureauDataFactory> Logger;

        public MaxBureauDataFactory(IOptions<WebDataOptions> optionsAccessor, ILogger<MaxBureauDataFactory> logger)
        {
            var options = optionsAccessor.Value;
            Logger = logger;
            string serviceCredentials = options.Credentials;
            var authCert = options.AuthCert;
            string serviceEndpoint = options.EndpointUrl ?? "";

            Svc = new MaxUsersODataService(serviceCredentials, serviceEndpoint);
        }

        public IEnumerable<Bureau> GetAll()
        {
            try
            {
                var maxAgencies = BUREAU.GetAll(Svc.ServiceContext as MaxUserAndGroupEntities);
                return maxAgencies.Select(x => new Bureau(x));
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, "MaxBureauDataFactory.GetAll");
                throw;
            }
        }
    }
}
