using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace Mod.Framework.Runtime.Security
{
    public class SystemModPrincipal : ModPrincipal, IModPrincipal
    {
        public SystemModPrincipal() : base(Principal)
        {

        }

        private static ClaimsPrincipal Principal
        {
            get
            {
                var claim = new Claim("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn", "system");
                var claims = new List<Claim>();
                claims.Add(claim);
                var identity = new ClaimsIdentity(claims, "System-Authentication-Type", "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn", "role");

                var principal = new ClaimsPrincipal(identity);
                return principal;
            }
        }

        public override bool IsInRole(string role)
        {
            // System Identity is in all roles
            return true;
        }
    }
}
