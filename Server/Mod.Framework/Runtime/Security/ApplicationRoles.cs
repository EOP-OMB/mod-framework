using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Mod.Framework.Runtime.Security
{
    public class ApplicationRoles : IApplicationRoles
    {
        public ApplicationRoles()
        {
            this.Roles = new List<Role>();
        }

        public List<Role> Roles { get; set; }

        public string[] GetUserRoles(IModPrincipal principal)
        {
            var roles = new List<string>();

            foreach (Role role in Roles)
            {
                foreach (RoleMember rm in role.RoleMembers)
                {
                    if (principal.Groups.Where(x => x.ToLower() == rm.Name.ToLower()).Count() > 0)
                    {
                        roles.Add(role.Name);
                        break;
                    }
                        
                }
            }

            return roles.ToArray();
        }

        public string[] GetRoleGroups(string role)
        {
            return Roles.Where(x => x.Name == role).Single().RoleMembers.Select(x => x.Name).ToArray();
        }
    }
}
