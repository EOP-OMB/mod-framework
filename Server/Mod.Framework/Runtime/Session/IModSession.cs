using Mod.Framework.Runtime.Security;
using System;
using System.Collections.Generic;
using System.Security.Principal;
using System.Text;

namespace Mod.Framework.Runtime.Session
{
    public interface IModSession
    {
        string UserId { get; }

        IModPrincipal Principal { get; }
    }
}
