using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Runtime.Security
{
    public interface IApplicationRoles
    {
        string[] GetUserRoles(IModPrincipal principal);
        string[] GetRoleGroups(string role);
    }
}
