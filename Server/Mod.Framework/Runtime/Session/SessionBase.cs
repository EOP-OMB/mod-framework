using Mod.Framework.Runtime.Security;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Runtime.Session
{
    public abstract class SessionBase : IModSession
    {
        public const string SessionOverrideContextKey = "Mod.Framework.Runtime.Session.Override";

        public abstract string UserId { get; }

        public abstract IModPrincipal Principal { get; }

        protected SessionBase()
        {
            
        }
    }
}
