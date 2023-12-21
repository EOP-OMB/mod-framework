using System;
using System.Collections.Specialized;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;

namespace Mod.Framework.HttpClientCalls
{
    public static partial class Rest
    {
        /// <summary>
        /// Executes an HTTP GET request against the Url specified, returning the 
        /// entire response body in string form.
        /// </summary>
        /// <param name="url">The URL to request</param>
        /// <param name="requireHttp200">
        /// Boolean indicating whether or not to return 
        /// null if the repsonse status code is not 200 (OK).
        /// </param>
        /// <returns>
        /// The response body or null if the response status is required to 
        /// be 200 (OK) but is not
        /// </returns>
        /// <remarks>
        /// This is from the original JASIG CAS Client
        /// </remarks>
        public static string PerformHttpGet(string url, bool requireHttp200)
        {
            string responseBody = null;

            var request = (HttpWebRequest)WebRequest.Create(url);
            request.Headers.Add("Cookie", "SeenSniWarning=1");
            using (var response = request.GetResponseWithoutException())
            {
                if (!requireHttp200 || response.StatusCode == HttpStatusCode.OK)
                {
                    responseBody = response.ResponseString();
                }
            }
            return responseBody;
        }

        /// <summary>
        /// Executes an HTTP GET request against the Url specified, returning the 
        /// entire response body as a byte array.  Unlike the simple WebRequest.GetResponse
        /// method, this version follows redirects, collecting/setting cookies along the way.
        /// </summary>
        /// <param name="url">The URL to request</param>
        /// <param name="cookies">(Optional) Holds cookies before and accumulated during the request</param>
        /// <param name="clientCertificate">(Optional) X509 Certificate</param>
        /// <param name="timeoutSeconds"></param>
        /// <param name="requestHeaders"></param>
        /// <param name="contentType"></param>
        /// <returns>
        /// The raw response body  
        /// </returns>
        /// <remarks>
        /// See http://www.codeproject.com/Articles/49243/Handling-Cookies-with-Redirects-and-HttpWebRequest
        /// for a discussion of the issue with redirects and cookies.
        /// </remarks>
        public static Byte[] PerformHttpGet(string url, CookieContainer cookies = null, X509Certificate clientCertificate = null, int timeoutSeconds = 120, NameValueCollection requestHeaders = null, string contentType = null)
        {
            using (var response = PerformHttpGetWithResponse(url, cookies, clientCertificate, timeoutSeconds, requestHeaders, contentType))
            {
                return response.ResponseBytes();
            }
        }


        /// <summary>
        /// This is the engine underlying PerformHttpGet.  It does the GET against the URL specified,
        /// returning the HttpWebResponse object.  Unlike the simple WebRequest.GetResponse
        /// method, this version optionally follows redirects, collecting/setting cookies along the way.
        /// </summary>
        /// <param name="url"></param>
        /// <param name="cookies"></param>
        /// <param name="clientCertificate"></param>
        /// <param name="timeoutSeconds"></param>
        /// <param name="requestHeaders"></param>
        /// <param name="contentType"></param>
        /// <param name="follow302"></param>
        /// <returns>The HttpWebResponse (LEFT OPEN) upon success, or throws an exception on failure.</returns>
        public static HttpWebResponse PerformHttpGetWithResponse(string url, CookieContainer cookies = null, X509Certificate clientCertificate = null, int timeoutSeconds = 120, NameValueCollection requestHeaders = null, string contentType = null, bool follow302 = true)
        {
            if (cookies == null)
            {
                cookies = new CookieContainer();
            }
            int redirectCount = 0;
            const int MaxRedirects = 30;

            var request = GetNewRequest(url, contentType, cookies, clientCertificate, requestHeaders);
            // see https://stackoverflow.com/questions/11323584/unable-to-read-data-from-the-transport-connection-the-connection-was-closed-err
            //     http://sysrc.code4beer.org/2009/06/30/webrequest-unable-to-read-from-transport/
            request.KeepAlive = false;
            request.ProtocolVersion = HttpVersion.Version10;
            request.Timeout = 1000 * timeoutSeconds;
            var response = request.GetResponseWithoutException();

            if (!follow302)
            {
                return response;
            }

            while (response.StatusCode == HttpStatusCode.Found && ++redirectCount <= MaxRedirects)
            {
                request = GetNewRequestWithOriginalRequest(request, response.Headers["Location"], contentType, cookies, clientCertificate, requestHeaders);
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
                response.Dispose();
                throw new HttpRequestException($"Status code {response.StatusCode} url {url}");
            }
            return response;
        }

        private static HttpWebRequest GetNewRequestWithOriginalRequest(HttpWebRequest originalRequest, string targetUrl, string contentType, CookieContainer cc, X509Certificate clientCertificate, NameValueCollection requestHeaders)
        {
            if (targetUrl.StartsWith("/"))
            {
                return GetNewRequest(originalRequest.RequestUri.Scheme + "://" + originalRequest.RequestUri.Host + targetUrl, contentType, cc, clientCertificate, requestHeaders);
            }
            else
            {
                var urlLower = targetUrl.ToLower();
                if (urlLower.StartsWith("https://") || urlLower.StartsWith("http://"))
                {
                    return GetNewRequest(targetUrl, contentType, cc, clientCertificate, requestHeaders);
                }
                else
                {
                    // deal with relative url for location
                    // https://stackoverflow.com/questions/8250259/is-a-302-redirect-to-relative-url-valid-or-invalid
                    var fullUri = new Uri(originalRequest.RequestUri, targetUrl);
                    return GetNewRequest(fullUri.ToString(), contentType, cc, clientCertificate, requestHeaders);
                }

            }
        }

        private static HttpWebRequest GetNewRequest(string targetUrl, string contentType, CookieContainer cc, X509Certificate clientCertificate, NameValueCollection requestHeaders)
        {
            var request = (HttpWebRequest)WebRequest.Create(targetUrl);
            request.CookieContainer = cc;
            request.AllowAutoRedirect = false;
            request.Proxy = GetDefaultProxy();

            if (!string.IsNullOrEmpty(contentType))
            {
                request.Accept = contentType;
            }
            // The credentials and useragent are required to make this work in a CAS SSO environment (e.g., ADFS)
            request.Credentials = CredentialCache.DefaultCredentials;
            request.UserAgent = DefaultUserAgent;
            if (requestHeaders != null) request.Headers.Add(requestHeaders);
            if (clientCertificate != null)
            {
                request.ClientCertificates.Add(clientCertificate);
            }
            return request;
        }
    }
}
