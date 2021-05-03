using Mod.Framework.Runtime.Security;

namespace Mod.Framework.Runtime.Session
{
    public interface IPrincipalAccessor
    {
        ModPrincipal Principal { get; }
    }
}
