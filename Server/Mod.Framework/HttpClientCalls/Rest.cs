using System;
using System.IO;
using System.Linq;
using System.Net;

namespace Mod.Framework.HttpClientCalls
{
    public static partial class Rest
    {
        private static readonly string DefaultUserAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko";

        /// <summary>
        /// Reads data from a stream until the end is reached. The
        /// data is returned as a byte array. An IOException is
        /// thrown if any of the underlying IO calls fail.
        /// </summary>
        /// <param name="stream">The stream to read data from</param>
        /// <remarks>Thanks to http://www.yoda.arachsys.com/csharp/readbinary.html </remarks>
        public static byte[] ReadFully(Stream stream)
        {
            byte[] buffer = new byte[32768];
            using (MemoryStream ms = new MemoryStream())
            {
                while (true)
                {
                    int read = stream.Read(buffer, 0, buffer.Length);
                    if (read <= 0)
                        return ms.ToArray();
                    ms.Write(buffer, 0, read);
                }
            }
        }

        /// <summary>
        /// Return the default web proxy, as configured with IE settings, system settings,
        /// or in the Linux style using environment variables HTTP_PROXY and NO_PROXY,
        /// with priority to linux-style, IE settings, and system settings in that order.
        /// NO_PROXY is a comma-separated list that can contain wildcards.
        /// HTTP_PROXY is a valid url (e.g., "http://consoso.com:8080")
        /// A separate HTTPS_PROXY isn't supported in the linux style.
        /// </summary>
        /// <returns></returns>
        public static IWebProxy GetDefaultProxy()
        {
            if (!string.IsNullOrEmpty(Environment.GetEnvironmentVariable("HTTP_PROXY")))
            {
                var configuredProxy = new WebProxy(Environment.GetEnvironmentVariable("HTTP_PROXY"));
                configuredProxy.BypassProxyOnLocal = true;
                if (!string.IsNullOrEmpty(Environment.GetEnvironmentVariable("NO_PROXY")))
                {
                    // comma-or-semicolon-separated list, maybe containing wildcards
                    var bypassList = Environment.GetEnvironmentVariable("NO_PROXY").Split(new char[] { ',', ';' }).ToList();
                    // the same thing, expressed as an array of regex strings
                    // note: "^" anchor is too stringent, unless you want to force specification of scheme in each element.
                    var bypassListAsRegex = bypassList.Select(x => x.Replace("*", "[^.]*") + "$").ToArray();
                    configuredProxy.BypassList = bypassListAsRegex;
                }
                return configuredProxy;
            }

            var defaultIEProxy = WebRequest.DefaultWebProxy;
            if (defaultIEProxy != null) return defaultIEProxy;

            var systemProxy = WebRequest.GetSystemWebProxy();
            if (systemProxy != null) return systemProxy;

            return null;
        }

        public static IWebProxy GetFiddlerProxy()
        {
            var configuredProxy = new WebProxy("http://localhost:8888");
            configuredProxy.BypassProxyOnLocal = true;
            return configuredProxy;
        }
    }
}
