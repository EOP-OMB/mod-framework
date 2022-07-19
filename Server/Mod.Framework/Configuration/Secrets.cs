using System.Collections.Generic;
using System.IO;


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
        public string this[string keyName]
        {
            get
            {
                string returnValue = TryGetValue(keyName);
                if (string.IsNullOrEmpty(returnValue))
                {
                    throw new KeyNotFoundException($"Secret or Environment variable \"{keyName}\" is missing or malformed.");
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
            return (!string.IsNullOrEmpty(TryGetValue(keyName)));
        }


        private string TryGetValue(string keyName)
        {
            string returnValue = string.Empty;

            if (File.Exists(Constants.DOCKER_SECRETS_DIR_LINUX + keyName))
            {
                try
                {
                    returnValue = File.ReadAllText(Constants.DOCKER_SECRETS_DIR_LINUX + keyName).TrimEnd(System.Environment.NewLine.ToCharArray()).Trim();
                }
                catch
                {
                    // if the secret file doesn't exist, try environment below
                }
            }
            else if (File.Exists(Constants.DOCKER_SECRETS_DIR_WINDOWS + keyName))
            {
                try
                {
                    returnValue = File.ReadAllText(Constants.DOCKER_SECRETS_DIR_WINDOWS + keyName).TrimEnd(System.Environment.NewLine.ToCharArray()).Trim();
                }
                catch
                {
                    // if the secret file doesn't exist, try environment below
                }
            }

            if (string.IsNullOrEmpty(returnValue))
            {
                returnValue = Environment.Variable(keyName);
            }

            return returnValue ?? string.Empty;
        }
    }

}
