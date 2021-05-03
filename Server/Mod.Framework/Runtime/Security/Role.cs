using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Runtime.Security
{
    public class Role
    {
        public Role()
        {
            RoleMembers = new List<RoleMember>();
        }

        public Role(string name, params string[] members) : this()
        {
            Name = name;
            foreach (string member in members)
            {
                var rm = new RoleMember();
                rm.Name = member;
                RoleMembers.Add(rm);
            }
        }

        public string Name { get; set; }
        public List<RoleMember> RoleMembers { get; set; }
    }
}
