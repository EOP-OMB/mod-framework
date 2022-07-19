using System;
using System.Collections.Generic;
using System.Data.Services.Client;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mod.Framework.Max.WebDataServices
{ 
    /// <summary>
    /// Provides a synchronous version of inherently asynchronous OData query operations.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class Helpers<T>
    {
        /// <summary>
        /// Synchronously execute the given query, returning a typed IEnumerable.
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        public static IEnumerable<T> Enumerate(DataServiceQuery<T> query)
        {
            return EnumerateAsync(query).GetAwaiter().GetResult();
        }

        private static async Task<IEnumerable<T>> EnumerateAsync(DataServiceQuery<T> query)
        {
            var answers = await Task.Factory.FromAsync(query.BeginExecute(null, null),
            (queryAsyncResult) =>
            {
                //try
                //{
                    var results = query.EndExecute(queryAsyncResult);
                    return results.ToList();
                //}
                //catch 
                //{
                //    return (null);
                //}
            });
            return answers;
        }
    }
}
