using System;
using System.Collections.Specialized;
using System.Net;
using System.Net.Http;

namespace Mod.Framework.HttpClientCalls
{
    public static partial class Rest
    {
        /// <summary>
        /// Perform an HTTP DELETE on the given URL.
        /// </summary>
        /// <param name="url"></param>
        /// <param name="cookies"></param>
        /// <param name="requestHeaders"></param>
        /// <returns></returns>
        public static Byte[] PerformHttpDelete(string url, CookieContainer cookies = null, NameValueCollection requestHeaders = null)
        {
            Byte[] responseBody = null;
            if (cookies == null)
            {
                cookies = new CookieContainer();
            }
            int redirectCount = 0;
            const int MaxRedirects = 30;

            var request = GetNewDeleteRequest(url, cookies, requestHeaders);
            var response = request.GetResponseWithoutException();

            while (response.StatusCode == HttpStatusCode.Found && ++redirectCount < MaxRedirects)
            {
                request = GetNewDeleteRequest(response.Headers["Location"], cookies, requestHeaders);
                response.Dispose();
                response = request.GetResponseWithoutException();
            }

            if (redirectCount == MaxRedirects)
            {
                response.Dispose();
                throw new HttpRequestException($"Maximum redirect count exceeded, url {url}");
            }
            else if (response.StatusCode != HttpStatusCode.OK && response.StatusCode != HttpStatusCode.Created && response.StatusCode != HttpStatusCode.Accepted && response.StatusCode != HttpStatusCode.NoContent)
            {
                var exceptionMessage = $"Unexpected HTTP status code {response.StatusCode} from url {url}";
                response.Dispose();
                throw new HttpRequestException(exceptionMessage);
            }
            else
            {
                using (var responseStream = response.GetResponseStream())
                {
                    if (responseStream != null)
                    {
                        responseBody = ReadFully(responseStream);
                    }
                }
            }
            response.Dispose();
            return responseBody;
        }

        /// <summary>
        /// Get a new DELETE request for the given URL and cookie container.
        /// </summary>
        /// <param name="targetUrl"></param>
        /// <param name="cc"></param>
        /// <param name="requestHeaders"></param>
        /// <returns></returns>
        private static HttpWebRequest GetNewDeleteRequest(string targetUrl, CookieContainer cc, NameValueCollection requestHeaders)
        {
            var request = (HttpWebRequest)WebRequest.Create(targetUrl);
            request.CookieContainer = cc;
            request.AllowAutoRedirect = false;
            request.Method = "DELETE";
            request.Proxy = GetDefaultProxy();
            request.Credentials = CredentialCache.DefaultCredentials;
            request.UserAgent = DefaultUserAgent;
            if (requestHeaders != null) request.Headers.Add(requestHeaders);
            return request;
        }
    }
}


