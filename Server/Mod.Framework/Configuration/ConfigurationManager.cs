using System;

namespace Mod.Framework.Configuration
{
    /// <summary>
    /// Holds singletons containing application settings and secrets.
    /// </summary>
    public class ConfigurationManager
    {
        static ConfigurationManager()
        {
            var inContainerVar = Environment.GetEnvironmentVariable(Constants.DOTNET_RUNNING_IN_CONTAINER);

            RunningInContainer = (string.IsNullOrEmpty(inContainerVar) ? false : (inContainerVar.ToString().ToLower() == "true" || inContainerVar.ToString() == "1"));
            Settings = new Settings();
            Secrets = new Secrets();
        }

        public static bool RunningInContainer { get; private set; }

        public static Settings Settings { get; private set; }

        public static Secrets Secrets { get; private set; }
    }
}
