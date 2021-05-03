using Mod.Framework.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.User.Entities
{
    public class DepartmentMap : Entity
    {
        public int DepartmentId { get; set; }
        public string Division { get; set; }
        public string Office { get; set; }

        public virtual Department Department { get; set; }
    }
}
