using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace Mod.Framework.HttpClientCalls
{
    public class WebDataOptions
    {
        public string EndpointUrl { get; set; } = "";

        public string Credentials { get; set; }

        public X509Certificate AuthCert { get; set; }
    }
}
