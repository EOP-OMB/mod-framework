using System.Linq;
using System.Security.Principal;
using Mod.Framework.Dependency;
using Mod.Framework.Runtime.Security;

namespace Mod.Framework.Runtime.Session
{
    /// <summary>
    /// Implements <see cref="IModSession"/> to get session properties from current claims.
    /// </summary>
    public class ModSession : SessionBase, ISingletonDependency
    {
        public ModSession(IPrincipalAccessor principalAccessor)
            : base()
        {
            PrincipalAccessor = principalAccessor;
        }

        public override string UserId
        {
            get
            {
                var userIdClaim = PrincipalAccessor.Principal?.UserId;
             
                if (string.IsNullOrEmpty(userIdClaim))
                {
                    return null;
                }

                return userIdClaim;
            }
        }

        protected IPrincipalAccessor PrincipalAccessor { get; }

        public override IModPrincipal Principal
        {
            get
            {
                return PrincipalAccessor.Principal;
            }
        }
    }
}