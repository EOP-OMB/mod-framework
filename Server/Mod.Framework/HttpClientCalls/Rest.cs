using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace Mod.Framework.HttpClientCalls
{
    public class Rest
    {

        private static string DefaultUserAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko";

        #region HTTP GET

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

            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.Headers.Add("Cookie", "SeenSniWarning=1");
            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
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
        /// method, this version follows redirects, collecting/setting cookies along the way.
        /// </summary>
        /// <param name="url"></param>
        /// <param name="cookies"></param>
        /// <param name="clientCertificate"></param>
        /// <param name="timeoutSeconds"></param>
        /// <param name="requestHeaders"></param>
        /// <param name="contentType"></param>
        /// <returns>The HttpWebResponse upon success, or throws an exception on failure.</returns>
        public static HttpWebResponse PerformHttpGetWithResponse(string url, CookieContainer cookies = null, X509Certificate clientCertificate = null, int timeoutSeconds = 120, NameValueCollection requestHeaders = null, string contentType = null)
        {
            if (cookies == null)
            {
                cookies = new CookieContainer();
            }
            int redirectCount = 0;
            const int MaxRedirects = 30;

            HttpWebRequest request = GetNewRequest(url, contentType, cookies, clientCertificate, requestHeaders);
            //request.Headers.Add("Accept-Encoding", "gzip,deflate");
            // see https://stackoverflow.com/questions/11323584/unable-to-read-data-from-the-transport-connection-the-connection-was-closed-err
            //     http://sysrc.code4beer.org/2009/06/30/webrequest-unable-to-read-from-transport/
            request.KeepAlive = false;
            request.ProtocolVersion = HttpVersion.Version10;
            request.Timeout = 1000 * timeoutSeconds;
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            while (response.StatusCode == HttpStatusCode.Found && ++redirectCount <= MaxRedirects)
            {
                response.Close();
                request = GetNewRequestWithOriginalRequest(request, response.Headers["Location"], contentType, cookies, clientCertificate, requestHeaders);
                response = (HttpWebResponse)request.GetResponse();
            }

            if (redirectCount == MaxRedirects)
            {
                response.Close();
                throw new Exception("Maximum redirect count exceeded, url " + url);
            }
            else if (response.StatusCode != HttpStatusCode.OK && response.StatusCode != HttpStatusCode.Created && response.StatusCode != HttpStatusCode.Accepted && response.StatusCode != HttpStatusCode.NoContent)
            {
                response.Close();
                throw new Exception("Status code " + response.StatusCode.ToString() + " url " + url);
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
            HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(targetUrl);
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

        #endregion

        #region HTTP POST
        // like the above, but using HTTP POST and with a request content body

        /// <summary>
        /// This is the basic engine for all the POST calls
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
            if (cookies == null)
            {
                cookies = new CookieContainer();
            }
            int redirectCount = 0;
            const int MaxRedirects = 30;

            HttpWebRequest request = GetNewPostRequest(url, postParameters, contentType, cookies, requestHeaders, clientCertificate: clientCertificate);
            request.Timeout = 1000 * timeoutSeconds;
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            if (requireHttp200)
            {
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    return response;
                }
                else
                {
                    throw new Exception("URL " + request.RequestUri.ToString() + " returned status " + response.StatusCode + " (" + response.StatusDescription + ") when HTTP 200 (OK) was required.");
                }
            }

            while (follow302 && (response.StatusCode == HttpStatusCode.Found) && ++redirectCount < MaxRedirects)
            {
                response.Close();
                request = GetNewPostRequest(response.Headers["Location"], postParameters, contentType, cookies, requestHeaders);
                response = (HttpWebResponse)request.GetResponse();
            }

            if (redirectCount == MaxRedirects)
            {
                response.Close();
                throw new Exception("Maximum redirect count exceeded, url " + url);
            }
            else if (response.StatusCode != HttpStatusCode.OK && response.StatusCode != HttpStatusCode.Created && response.StatusCode != HttpStatusCode.Accepted && response.StatusCode != HttpStatusCode.NoContent)
            {
                response.Close();
                throw new Exception("Status code " + response.StatusCode.ToString() + " url " + url);
            }
            else
            {
                return response;
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
        /// <returns>
        /// The response body or null if the response status is required to 
        /// be 200 (OK) but is not
        /// </returns>
        /// <remarks>
        /// This is from the original JASIG CAS Client
        /// </remarks>
        public static string PerformHttpPost(string url, string postData, bool requireHttp200)
        {
            var response = PerformHttpPostWithResponse(url, postData, requireHttp200: requireHttp200);
            return response.ResponseString();
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
            var response = PerformHttpPostWithResponse(url, postData, requireHttp200: requireHttp200, follow302: false);
            statusCode = response.StatusCode;
            headers = response.Headers;
            return response.ResponseString();
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
            var response = PerformHttpPostWithResponse(url, postParameters, requestHeaders: requestHeaders);
            return response.ResponseBytes();
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
            var response = PerformHttpPostWithResponse(url, PostParametersToString(nameValuePairs), cookies: cookies, requestHeaders: requestHeaders);
            return response.ResponseBytes();
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

            var response = PerformHttpPostWithResponse(url, postParameters, contentType: contentType, cookies: cookies, requestHeaders: requestHeaders, follow302: true);
            return response.ResponseBytes();
        }


        /// <summary>
        /// Return a new HTTP Post request
        /// </summary>
        /// <param name="originalRequest"></param>
        /// <param name="targetUrl"></param>
        /// <param name="postParameters"></param>
        /// <param name="contentType"></param>
        /// <param name="cc"></param>
        /// <param name="requestHeaders"></param>
        /// <returns></returns>
        public static HttpWebRequest GetNewPostRequest(HttpWebRequest originalRequest, string targetUrl, string postParameters, string contentType, CookieContainer cc, NameValueCollection requestHeaders = null)
        {
            if (targetUrl.StartsWith("/"))
            {
                return GetNewPostRequest(originalRequest.RequestUri.Scheme + "://" + originalRequest.RequestUri.Host + targetUrl, postParameters, contentType, cc, requestHeaders);
            }
            else
            {
                return GetNewPostRequest(targetUrl, postParameters, contentType, cc, requestHeaders);
            }
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
        private static HttpWebRequest GetNewPostRequest(string targetUrl, string postParameters, string contentType, CookieContainer cc, NameValueCollection requestHeaders, X509Certificate clientCertificate = null)
        {
            HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(targetUrl);
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
                request.Accept = contentType;
            }
            request.ContentLength = postParameters.Length;
            request.Credentials = CredentialCache.DefaultCredentials;
            request.UserAgent = DefaultUserAgent;
            if (requestHeaders != null) request.Headers.Add(requestHeaders);
            using (StreamWriter writer = new StreamWriter(request.GetRequestStream()))
            {
                writer.Write(postParameters);
                writer.Flush();
            }
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
        public static HttpWebRequest GetNewPostRequest(string targetUrl, Dictionary<string, string> postParameters, CookieContainer cc, NameValueCollection requestHeaders = null)
        {
            return GetNewPostRequest(targetUrl, PostParametersToString(postParameters), "application/x-www-form-urlencoded", cc, requestHeaders);
        }

        #endregion

        #region HTTP PUT
        /// <summary>
        /// Perform an http PUT on the given URL.
        /// </summary>
        /// <param name="url"></param>
        /// <param name="payload"></param>
        /// <param name="contentType"></param>
        /// <param name="cookies"></param>
        /// <param name="requestHeaders"></param>
        /// <returns></returns>
        public static Byte[] PerformHttpPut(string url, string payload, string contentType, CookieContainer cookies = null, NameValueCollection requestHeaders = null)
        {
            Byte[] responseBody = null;
            if (cookies == null)
            {
                cookies = new CookieContainer();
            }
            int redirectCount = 0;
            const int MaxRedirects = 30;

            HttpWebRequest request = GetNewPutRequest(url, payload, contentType, cookies, requestHeaders);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            while (response.StatusCode == HttpStatusCode.Found && ++redirectCount < MaxRedirects)
            {
                response.Close();
                request = GetNewPutRequest(response.Headers["Location"], payload, contentType, cookies, requestHeaders);
                response = (HttpWebResponse)request.GetResponse();
            }

            if (redirectCount == MaxRedirects)
            {
                response.Close();
                throw new Exception("Maximum redirect count exceeded, url " + url);
            }
            else if (response.StatusCode != HttpStatusCode.OK && response.StatusCode != HttpStatusCode.Created && response.StatusCode != HttpStatusCode.Accepted && response.StatusCode != HttpStatusCode.NoContent)
            {
                response.Close();
                throw new Exception("Status code " + response.StatusCode.ToString() + " url " + url);
            }
            else
            {
                using (Stream responseStream = response.GetResponseStream())
                {
                    if (responseStream != null)
                    {
                        responseBody = ReadFully(responseStream);
                    }
                }
            }
            return responseBody;
        }

        /// <summary>
        /// Create a new PUT request based on the given url, parameters, content type and cookie container.
        /// </summary>
        /// <param name="targetUrl"></param>
        /// <param name="postParameters"></param>
        /// <param name="contentType"></param>
        /// <param name="cc"></param>
        /// <param name="requestHeaders"></param>
        /// <returns></returns>
        private static HttpWebRequest GetNewPutRequest(string targetUrl, string postParameters, string contentType, CookieContainer cc, NameValueCollection requestHeaders)
        {
            HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(targetUrl);
            request.CookieContainer = cc;
            request.AllowAutoRedirect = false;
            request.Method = "PUT";
            request.Proxy = GetDefaultProxy();
            if (!string.IsNullOrEmpty(contentType))
            {
                request.ContentType = contentType;
                request.Accept = contentType;
            }
            request.ContentLength = postParameters.Length;
            request.Credentials = CredentialCache.DefaultCredentials;
            request.UserAgent = DefaultUserAgent;
            if (requestHeaders != null) request.Headers.Add(requestHeaders);
            using (StreamWriter writer = new StreamWriter(request.GetRequestStream()))
            {
                writer.Write(postParameters);
                writer.Flush();
            }
            return request;
        }

        #endregion

        #region HTTP DELETE

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

            HttpWebRequest request = GetNewDeleteRequest(url, cookies, requestHeaders);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            while (response.StatusCode == HttpStatusCode.Found && ++redirectCount < MaxRedirects)
            {
                response.Close();
                request = GetNewDeleteRequest(response.Headers["Location"], cookies, requestHeaders);
                response = (HttpWebResponse)request.GetResponse();
            }

            if (redirectCount == MaxRedirects)
            {
                response.Close();
                throw new Exception("Maximum redirect count exceeded, url " + url);
            }
            else if (response.StatusCode != HttpStatusCode.OK && response.StatusCode != HttpStatusCode.Created && response.StatusCode != HttpStatusCode.Accepted && response.StatusCode != HttpStatusCode.NoContent)
            {
                response.Close();
                throw new Exception("Status code " + response.StatusCode.ToString() + " url " + url);
            }
            else
            {
                using (Stream responseStream = response.GetResponseStream())
                {
                    if (responseStream != null)
                    {
                        responseBody = ReadFully(responseStream);
                    }
                }
            }
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
            HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(targetUrl);
            request.CookieContainer = cc;
            request.AllowAutoRedirect = false;
            request.Method = "DELETE";
            request.Proxy = GetDefaultProxy();
            //if (!string.IsNullOrEmpty(contentType)) request.ContentType = contentType;
            //request.ContentLength = postParameters.Length;
            request.Credentials = CredentialCache.DefaultCredentials;
            request.UserAgent = DefaultUserAgent;
            if (requestHeaders != null) request.Headers.Add(requestHeaders);
            //using (StreamWriter writer = new StreamWriter(request.GetRequestStream()))
            //{
            //    writer.Write(postParameters);
            //    writer.Flush();
            //}
            return request;
        }

        #endregion

        #region Helpers
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
                    // comma-separated list, maybe containing wildcards
                    var bypassList = Environment.GetEnvironmentVariable("NO_PROXY").Split(new char[] { ',' }).ToList();
                    // the same thing, expressed as an array of regex strings
                    var bypassListAsRegex = bypassList.Select(x => "^" + x.Replace("*", "[^.]*") + "$").ToArray();
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

        #endregion

    }
}
