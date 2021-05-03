using Mod.Framework.Runtime.Security;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Runtime.Session
{
    public class NullModSession : SessionBase
    {
        /// <summary>
        /// Singleton instance.
        /// </summary>
        public static NullModSession Instance { get; } = new NullModSession();

        /// <inheritdoc/>
        public override string UserId => null;

        public override IModPrincipal Principal { get; }

        private NullModSession()
            : base()
        {

        }
    }
}
