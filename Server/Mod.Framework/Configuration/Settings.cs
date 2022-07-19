using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Mod.Framework.Configuration
{
    public class Settings
    {

        /// <summary>
        /// Return a setting, which can either be a docker secret (preferred) or an environment variable. Return string.Empty if missing.
        /// </summary>
        /// <param name="keyName"></param>
        /// <returns></returns>
        public string this[string keyName]
        {
            get
            {
                string returnValue;
                if (ConfigurationManager.Secrets.Exists(keyName))
                {
                    returnValue = ConfigurationManager.Secrets[keyName];
                }
                else
                {
                    returnValue = Environment.Variable(keyName);
                }
                return returnValue;
            }
        }
    }
}
