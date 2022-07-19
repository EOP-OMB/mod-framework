using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace Mod.Framework.Runtime.Security
{
    public static class DomainSecurity
    {
        static List<string> AllowedDomains;
        static string FailureUrl;


        /// <summary>
        /// Configure allowed domains to redirect to, with wildcards (e.g., https://*.max.gov).
        /// </summary>
        /// <param name="wildcardDomains"></param>
        /// <param name="failureUrl"></param>
        public static void Configure(IEnumerable<string> wildcardDomains, string failureUrl = "https://status.omb.gov")
        {
            AllowedDomains = new List<string>();
            foreach (var wildcardDomain in wildcardDomains)
            {
                AllowedDomains.Add("^" + wildcardDomain.ToLower().Replace("*", "[^.]+") + "$");
            }
            FailureUrl = failureUrl;
        }

        public static void RedirectToSafeUrl(this HttpResponse response, string redirectUrl)
        {
            if (!redirectUrl.ToLower().StartsWith("http://") && !redirectUrl.ToLower().StartsWith("https://"))
            {
                // relative to the current site, consider it safe.
                response.Redirect(redirectUrl);
                return;
            }
            var uri = new Uri(redirectUrl);
            var requestedSchemeAndDomain = uri.Scheme + "://" + uri.DnsSafeHost.ToLower() + (uri.IsDefaultPort ? "" : ":" + uri.Port);
            foreach (var domain in AllowedDomains)
            {
                if (Regex.Match(requestedSchemeAndDomain, domain) != Match.Empty)
                {
                    response.Redirect(redirectUrl);
                    return;
                }
            }
            response.Redirect(FailureUrl);
        }
    }
}
