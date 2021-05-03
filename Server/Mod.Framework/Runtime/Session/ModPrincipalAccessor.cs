using Mod.Framework.Runtime.Security;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Threading;

namespace Mod.Framework.Runtime.Session
{
    public class ModPrincipalAccessor : IPrincipalAccessor
    {
        public virtual ModPrincipal Principal => Thread.CurrentPrincipal as ModPrincipal;

        public static ModPrincipalAccessor Instance => new ModPrincipalAccessor();

    }
}
