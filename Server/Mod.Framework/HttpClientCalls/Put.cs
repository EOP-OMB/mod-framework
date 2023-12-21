using System;
using System.Collections.Specialized;
using System.IO;
using System.Net;
using System.Net.Http;

namespace Mod.Framework.HttpClientCalls
{
    public static partial class Rest
    {
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

            var request = GetNewPutRequest(url, payload, contentType, cookies, requestHeaders);
            var response = request.GetResponseWithoutException();

            while (response.StatusCode == HttpStatusCode.Found && ++redirectCount < MaxRedirects)
            {
                request = GetNewPutRequest(response.Headers["Location"], payload, contentType, cookies, requestHeaders);
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
                using (Stream responseStream = response.GetResponseStream())
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
            var request = (HttpWebRequest)WebRequest.Create(targetUrl);
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
            using (var writer = new StreamWriter(request.GetRequestStream()))
            {
                writer.Write(postParameters);
                writer.Flush();
            }
            return request;
        }
    }
}
