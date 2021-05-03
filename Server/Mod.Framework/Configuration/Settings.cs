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
                if (File.Exists(Constants.DOCKER_SECRETS_DIR + keyName))
                {
                    returnValue = File.ReadAllText(Constants.DOCKER_SECRETS_DIR + keyName);
                }
                else
                {
                    returnValue = Environment.GetEnvironmentVariable(keyName);
                }
                return returnValue;
            }
        }
    }
}
