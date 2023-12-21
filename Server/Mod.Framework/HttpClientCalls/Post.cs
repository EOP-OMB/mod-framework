using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace Mod.Framework.HttpClientCalls
{
    public static partial class Rest
    {
        /// <summary>
        /// This is the basic engine for all the POST calls.  Be sure to close the resulting HttpWebResponse!
        /// </summary>
        /// <param name="url"></param>
        /// <param name="postParameters"></param>
        /// <param name="contentType"></param>
        /// <param name="requireHttp200"></param>
        /// <param name="follow302"></param>
        /// <param name="cookies"></param>
        /// <param name="clientCertificate"></param>
        /// <param name="timeoutSeconds"></param>
        /// <param name="requestHeaders"></param>
        /// <returns>the HttpWebResponse (LEFT OPEN)</returns>
        public static HttpWebResponse PerformHttpPostWithResponse(
                            string url,
                            byte[] postParameters,
                            string contentType = "application/x-www-form-urlencoded",
                            bool requireHttp200 = false,
                            bool follow302 = true,
                            CookieContainer cookies = null,
                            X509Certificate clientCertificate = null,
                            int timeoutSeconds = 120,
                            NameValueCollection requestHeaders = null)
        {
            if (cookies == null)
            {
                cookies = new CookieContainer();
            }
            int redirectCount = 0;
            const int MaxRedirects = 30;

            var request = GetNewPostRequest(url, postParameters, contentType, cookies, requestHeaders, clientCertificate: clientCertificate);
            request.Timeout = 1000 * timeoutSeconds;
            var response = request.GetResponseWithoutException();

            if (requireHttp200)
            {
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    return response;
                }
                else
                {
                    var exceptionMessage = $"URL {request.RequestUri} returned status {response.StatusCode} ({response.StatusDescription}) when HTTP 200 (OK) was required.";
                    response.Dispose();
                    throw new HttpRequestException(exceptionMessage);
                }
            }

            while (follow302 && (response.StatusCode == HttpStatusCode.Found) && ++redirectCount < MaxRedirects)
            {
                request = GetNewPostRequest(response.Headers["Location"], postParameters, contentType, cookies, requestHeaders, clientCertificate: clientCertificate, originalUri: request.RequestUri);
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
                return response;
            }
        }

        /// <summary>
        /// Perform a POST, with a string as the payload. Be sure to close the resulting HttpWebResponse!
        /// </summary>
        /// <param name="url"></param>
        /// <param name="postParameters"></param>
        /// <param name="contentType"></param>
        /// <param name="requireHttp200"></param>
        /// <param name="follow302"></param>
        /// <param name="cookies"></param>
        /// <param name="clientCertificate"></param>
        /// <param name="timeoutSeconds"></param>
        /// <param name="requestHeaders"></param>
        /// <returns></returns>
        public static HttpWebResponse PerformHttpPostWithResponse(
                    string url,
                    string postParameters,
                    string contentType = "application/x-www-form-urlencoded",
                    bool requireHttp200 = false,
                    bool follow302 = true,
                    CookieContainer cookies = null,
                    X509Certificate clientCertificate = null,
                    int timeoutSeconds = 120,
                    NameValueCollection requestHeaders = null)
        {
            return PerformHttpPostWithResponse(url, Encoding.Default.GetBytes(postParameters), contentType: contentType,
                requireHttp200: requireHttp200, follow302: follow302, cookies: cookies, clientCertificate: clientCertificate,
                timeoutSeconds: timeoutSeconds, requestHeaders: requestHeaders);
        }

        /// <summary>
        /// Executes an HTTP POST against the Url specified with the supplied post data, 
        /// returning the entire response body in string form.
        /// </summary>
        /// <param name="url">The URL to post to</param>
        /// <param name="postData">The x-www-form-urlencoded data to post to the URL</param>
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
        public static string PerformHttpPost(string url, string postData, bool requireHttp200)
        {
            using (var response = PerformHttpPostWithResponse(url, postData, requireHttp200: requireHttp200))
            {
                return response.ResponseString();
            }
        }

        /// <summary>
        /// Executes an HTTP POST against the Url specified with the supplied post data, 
        /// returning the entire response body in string form.
        /// </summary>
        /// <param name="url">The URL to post to</param>
        /// <param name="postData">The x-www-form-urlencoded data to post to the URL</param>
        /// <param name="requireHttp200">
        /// Boolean indicating whether or not to return 
        /// null if the repsonse status code is not 200 (OK).
        /// </param>
        /// <param name="statusCode"></param>
        /// <param name="headers">WebHeaderCollection variable that will receive the response headers.</param>
        /// <returns>
        /// The response body or null if the response status is required to 
        /// be 200 (OK) but is not
        /// </returns>
        /// <remarks>
        /// This is from the original JASIG CAS Client
        /// </remarks>
        public static string PerformHttpPost(string url, string postData, bool requireHttp200, out HttpStatusCode statusCode, out WebHeaderCollection headers)
        {
            using (var response = PerformHttpPostWithResponse(url, postData, requireHttp200: requireHttp200, follow302: false))
            {
                statusCode = response.StatusCode;
                headers = response.Headers;
                return response.ResponseString();
            }
        }

        /// <summary>
        /// Executes an HTTP POST request against the Url specified, returning the 
        /// entire response body as a byte array.  Unlike the simple WebRequest.GetResponse
        /// method, this version follows redirects, setting cookies along the way.
        /// HTTP Content-type is assumed to be application/x-www-form-urlencoded.
        /// </summary>
        /// <param name="url">The URL to request</param>
        /// <param name="postParameters">The POST parameters in querystring format separated by ampersands, name1=value1...</param>
        /// <param name="requestHeaders"></param>
        /// <returns>
        /// The response body or null 
        /// </returns>
        public static Byte[] PerformHttpPost(string url, string postParameters, NameValueCollection requestHeaders = null)
        {
            using (var response = PerformHttpPostWithResponse(url, postParameters, requestHeaders: requestHeaders))
            {
                return response.ResponseBytes();
            }
        }

        /// <summary>
        /// Executes an HTTP POST request against the Url specified, returning the 
        /// entire response body as a byte array.  Unlike the simple WebRequest.GetResponse
        /// method, this version follows redirects, setting cookies along the way.
        /// HTTP Content-type is automatically set to application/x-www-form-urlencoded.
        /// </summary>
        /// <param name="url">The URL to request</param>
        /// <param name="nameValuePairs">The POST parameters as a Dictionary of name,value pairs</param>
        /// <param name="cookies">The accumulated cookiecontainer.</param>
        /// <param name="requestHeaders"></param>
        /// <returns>
        /// The response body or null 
        /// </returns>
        public static Byte[] PerformHttpPost(string url, Dictionary<string, string> nameValuePairs, CookieContainer cookies = null, NameValueCollection requestHeaders = null)
        {
            using (var response = PerformHttpPostWithResponse(url, PostParametersToString(nameValuePairs), cookies: cookies, requestHeaders: requestHeaders))
            {
                return response.ResponseBytes();
            }

        }

        /// <summary>
        /// Executes an HTTP POST request against the Url specified, returning the 
        /// entire response body as a byte array.  Unlike the simple WebRequest.GetResponse
        /// method, this version follows redirects, setting cookies along the way.
        /// </summary>
        /// <param name="url">The URL to request</param>
        /// <param name="postParameters">The POST parameters in arbitrary string format</param>
        /// <param name="contentType">The HTTP content-type appropriate for the POST parameters</param>
        /// <param name="cookies">(Optional) cookies before and after the request</param>
        /// <param name="requestHeaders"></param>
        /// <returns>
        /// The response body or null 
        /// </returns>
        public static Byte[] PerformHttpPost(string url, string postParameters, string contentType, CookieContainer cookies = null, NameValueCollection requestHeaders = null)
        {

            using (var response = PerformHttpPostWithResponse(url, postParameters, contentType: contentType, cookies: cookies, requestHeaders: requestHeaders, follow302: true))
            {
                return response.ResponseBytes();
            }

        }

        /// <summary>
        /// Convert a name/value dictionary into a post parameter string
        /// </summary>
        /// <param name="nameValuePairs"></param>
        /// <returns></returns>
        public static string PostParametersToString(Dictionary<string, string> nameValuePairs)
        {
            StringBuilder sb = new StringBuilder();
            foreach (string key in nameValuePairs.Keys)
            {
                if (sb.Length > 0)
                {
                    sb.Append("&");
                }
                sb.Append(key);
                sb.Append("=");
                sb.Append(System.Web.HttpUtility.UrlEncode(nameValuePairs[key]));
            }
            return sb.ToString();
        }

        /// <summary>
        /// Create a post request with all the request parameters filled in.
        /// </summary>
        /// <param name="targetUrl"></param>
        /// <param name="postParameters"></param>
        /// <param name="contentType"></param>
        /// <param name="cc"></param>
        /// <param name="requestHeaders"></param>
        /// <returns></returns>
        private static HttpWebRequest GetNewPostRequest(string targetUrl, string postParameters, string contentType, CookieContainer cc, NameValueCollection requestHeaders, X509Certificate clientCertificate = null, Uri originalUri = null)
        {
            return GetNewPostRequest(targetUrl, Encoding.Default.GetBytes(postParameters), contentType, cc, requestHeaders, clientCertificate, originalUri: originalUri);
        }

        private static HttpWebRequest GetNewPostRequest(string targetUrl, byte[] payload, string contentType, CookieContainer cc, NameValueCollection requestHeaders, X509Certificate clientCertificate = null, Uri originalUri = null)
        {
            string url;
            if (targetUrl.StartsWith("/"))
            {
                if (originalUri == null)
                {
                    throw new UriFormatException($"Relative URL {targetUrl} was specified, and can't be resolved with an accompanying original absolute URL");
                }
                url = originalUri.Scheme + "://" + originalUri.Host + targetUrl;
            }
            else
            {
                url = targetUrl;
            }
            var uri = new Uri(url);
            var request = (HttpWebRequest)WebRequest.Create(uri);
            request.CookieContainer = cc;
            request.AllowAutoRedirect = false;
            request.Method = "POST";
            request.Headers.Add("Cookie", "SeenSniWarning=1");
            request.Proxy = GetDefaultProxy();
            if (clientCertificate != null)
            {
                request.ClientCertificates.Add(clientCertificate);
            }
            if (!string.IsNullOrEmpty(contentType))
            {
                request.ContentType = contentType;
            }
            request.ContentLength = payload.Length;
            request.Credentials = CredentialCache.DefaultCredentials;
            request.UserAgent = DefaultUserAgent;
            if (requestHeaders != null) request.Headers.Add(requestHeaders);
            request.GetRequestStream().Write(payload, 0, payload.Length);
            return request;
        }

        /// <summary>
        /// Create a post request with all the request parameters filled in.
        /// </summary>
        /// <param name="targetUrl"></param>
        /// <param name="postParameters"></param>
        /// <param name="cc"></param>
        /// <param name="requestHeaders"></param>
        /// <returns></returns>
        public static HttpWebRequest GetNewPostRequest(string targetUrl, Dictionary<string, string> postParameters, CookieContainer cc, NameValueCollection requestHeaders = null, Uri originalUri = null)
        {
            return GetNewPostRequest(targetUrl, PostParametersToString(postParameters), "application/x-www-form-urlencoded", cc, requestHeaders, originalUri: originalUri);
        }

    }
}

