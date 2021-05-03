using Mod.Framework.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.User.Entities
{
    public class EmployeeGroup : Entity
    {
        public string Name { get; set; }
        public int EmployeeId { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
