using System;
using System.Collections.Generic;
using System.Data.Services.Client;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Text;

using Mod.Framework.HttpClientCalls;
using Mod.Framework.Max.WebDataServices;

namespace Mod.Framework.Max.OData
{
    public abstract class ODataServiceBase
    {
        public DataServiceContext ServiceContext { get; protected set; }
        protected string BasicAuthHeaderValue { get; set; }

        protected void Initialize(string serviceCredentials)
        {
            ServiceContext.SendingRequest2 += SendAuthCredsOnRequest;
            BasicAuthHeaderValue = Convert.ToBase64String(Encoding.ASCII.GetBytes(serviceCredentials));
        }

        private void SendAuthCredsOnRequest(object sender, SendingRequest2EventArgs e)
        {
            if(!string.IsNullOrEmpty(BasicAuthHeaderValue))
            {
                e.RequestMessage.SetHeader("Authorization", "Basic " + BasicAuthHeaderValue);
            }
            
            HttpWebRequestMessage requestMessage = e.RequestMessage as HttpWebRequestMessage;
            requestMessage.HttpWebRequest.Proxy = Rest.GetDefaultProxy();
        }
    }
}
