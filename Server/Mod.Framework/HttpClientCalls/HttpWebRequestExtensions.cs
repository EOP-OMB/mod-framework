using System.Net;

namespace Mod.Framework.HttpClientCalls
{
    internal static class HttpWebRequestExtensions
    {
        /// <summary>
        /// Return the actual response as long as the status code is < HTTP 400, otherwise throw
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public static HttpWebResponse GetResponseWithoutException(this HttpWebRequest request)
        {
            try
            {
                return (HttpWebResponse)request.GetResponse();
            }
            catch (WebException wex)
            {
                var response = wex.Response as HttpWebResponse;
                if (response == null || (int)response.StatusCode >= 400)
                    throw;
                return response;
            }
        }
    }
}
