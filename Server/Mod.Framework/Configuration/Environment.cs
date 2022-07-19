using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mod.Framework.Configuration
{
    internal static class Environment
    {
        /// <summary>
        /// Transparently deal with the fact that "." isn't legitimate in a linux environment variable name.  Note: in a linux environment, the variables have to be set accordingly with "_" instead of ".".
        /// </summary>
        /// <param name="variableName"></param>
        /// <returns></returns>
        public static string Variable(string variableName)
        {
            if (!string.IsNullOrEmpty(System.Environment.GetEnvironmentVariable(variableName)))
            {
                return System.Environment.GetEnvironmentVariable(variableName) ?? string.Empty;
            }
            return System.Environment.GetEnvironmentVariable(variableName.Replace(".", "_")) ?? string.Empty;
        }
    }
}
