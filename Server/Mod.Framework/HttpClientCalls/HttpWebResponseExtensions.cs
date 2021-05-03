using System.IO;
using System.Net;

namespace Mod.Framework.HttpClientCalls
{
    public static class HttpWebResponseExtensions
    {

        /// <summary>
        /// Return the response payload of an HTTP response as a byte array
        /// </summary>
        /// <param name="response"></param>
        /// <returns></returns>
        public static byte[] ResponseBytes(this HttpWebResponse response)
        {
            byte[] responseBody = new byte[] { };
            using (Stream responseStream = response.GetResponseStream())
            {
                if (responseStream != null)
                {
                    responseBody = Rest.ReadFully(responseStream);
                }
            }
            return responseBody;
        }

        /// <summary>
        /// Return the response payload of an HTTP response as a string
        /// </summary>
        /// <param name="response"></param>
        /// <returns></returns>
        public static string ResponseString(this HttpWebResponse response)
        {
            string responseBody = string.Empty;
            using (Stream responseStream = response.GetResponseStream())
            {
                if (responseStream != null)
                {
                    using (StreamReader responseReader = new StreamReader(responseStream))
                    {
                        responseBody = responseReader.ReadToEnd();
                    }
                }
            }
            return responseBody;
        }
    }
}
