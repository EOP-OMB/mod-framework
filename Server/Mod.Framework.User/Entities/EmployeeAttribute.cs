using Mod.Framework.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.User.Entities
{
    public class EmployeeAttribute : Entity
    {
        public int EmployeeId { get; set; }
        public string Attribute { get; set; }
        public string Value { get; set; }

        public virtual Employee Employee { get; set; }
    }
}
