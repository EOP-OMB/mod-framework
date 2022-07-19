using System;
using Mod.Framework.Max.WebDataServices;

namespace Mod.Framework.Max.OData
{
    public class MaxUsersODataService : ODataServiceBase
    {
        /// <summary>
        /// Create the service, using credentials of the form username:password and a service endpoint
        /// </summary>
        /// <param name="serviceCredentials"></param>
        /// <param name="serviceEndpoint"></param>
        public MaxUsersODataService(string serviceCredentials, string serviceEndpoint = "")
        {
            Uri svcUri;

            if (string.IsNullOrEmpty(serviceEndpoint))
            {
                svcUri = new Uri("https://feeds.max.gov/maxdata/max/maxusers.svc");
            }
            else
            {
                svcUri = new Uri(serviceEndpoint);
            }

            ServiceContext = new MaxUserAndGroupEntities(svcUri);

            Initialize(serviceCredentials);
        }
    }
}
