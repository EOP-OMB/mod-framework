using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Mod.Framework.Configuration
{
    /// <summary>
    /// Represents application "secrets", which can come from environment-dependent places such as container/orchestrator secrets or environment variables.
    /// </summary>
    public class Secrets
    {

        /// <summary>
        /// Return either a docker secret (preferred) or environment variable.  Throw if missing.
        /// </summary>
        /// <param name="keyName"></param>
        /// <returns></returns>
        /// <remarks>
        /// Optionally, if environment variable <secret>.SecretName is defined, then the value
        /// of that is used as the secret name rather than the given secret name.
        /// In other words, you could have a secret named "X".  If environment varable
        /// "X.SecretName" exists, and has the value "Y", then Secrets["X"] returns the value of
        /// secret "Y" (which has to exist).   If environment variable "X.SecretName" doesn't exist,
        /// then Secrets["X"] returns the value of secret "X", which again, has to exist.
        /// </remarks>
        public string this[string keyName]
        {
            get
            {
                var secretName = keyName;
                if (!string.IsNullOrEmpty(ConfigurationManager.Settings[keyName + ".SecretName"]))
                {
                    secretName = ConfigurationManager.Settings[keyName + ".SecretName"];
                }
                string returnValue = TryGetValue(secretName);
                if (string.IsNullOrEmpty(returnValue))
                {
                    throw new Exception("Secret or Environment variable \"" + secretName + "\" is missing or malformed.");
                }
                return returnValue;
            }
        }

        /// <summary>
        /// Tests whether or not a secret exists
        /// </summary>
        /// <param name="keyName"></param>
        /// <returns></returns>
        public bool Exists(string keyName)
        {
            var secretName = keyName;
            if (!string.IsNullOrEmpty(ConfigurationManager.Settings[keyName + ".SecretName"]))
            {
                secretName = ConfigurationManager.Settings[keyName + ".SecretName"];
            }
            return (!string.IsNullOrEmpty(TryGetValue(secretName)));
        }

        private string TryGetValue(string keyName)
        {
            string returnValue;
            if (ConfigurationManager.RunningInContainer && File.Exists(Constants.DOCKER_SECRETS_DIR + keyName))
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
