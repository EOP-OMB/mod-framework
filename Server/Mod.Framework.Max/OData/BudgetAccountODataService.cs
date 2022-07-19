using System;
using Mod.Framework.Max.WebDataServices;

namespace Mod.Framework.Max.OData
{
    public class BudgetAccountODataService : ODataServiceBase
    {
        /// <summary>
        /// Create the service, using credentials of the form username:password and a service endpoint
        /// </summary>
        /// <param name="serviceCredentials"></param>
        /// <param name="serviceEndpoint"></param>
        public BudgetAccountODataService(string serviceCredentials, string serviceEndpoint = "")
        {
            Uri svcUri;

            if (string.IsNullOrEmpty(serviceEndpoint))
            {
                svcUri = new Uri("https://feeds.stage.max.gov/maxdata/budget/accounts.svc");
            }
            else
            {
                svcUri = new Uri(serviceEndpoint);
            }

            ServiceContext = new BudgetAccountDataEntities(svcUri);

            Initialize(serviceCredentials);
        }
    }
}
