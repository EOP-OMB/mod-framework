namespace Mod.Framework.Configuration
{
    public static class Constants
    {
        public const string DOCKER_SECRETS_DIR_WINDOWS = @"c:\programdata\docker\secrets\";
        public const string DOCKER_SECRETS_DIR_LINUX = @"/programdata/docker/secrets/";
        public const string DOTNET_RUNNING_IN_CONTAINER = "DOTNET_RUNNING_IN_CONTAINER";
    }
}
