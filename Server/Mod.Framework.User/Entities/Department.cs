using Mod.Framework.Domain.Entities.Auditing;
using System.Collections.Generic;

namespace Mod.Framework.User.Entities
{
    public class Department : FullAuditedEntity
    {
        public Department()
        {

        }

        public string Name { get; set; }
        public string Abbreviation { get; set; }
        public string AdSecurityGroup { get; set; }
        public int? ParentDepartmentId { get; set; }
        public int? InternalOrgId { get; set; }

        public virtual ICollection<Department> Children { get; set; }
        public virtual Department Parent { get; set; }
        public virtual ICollection<Employee> Employees { get; set; }
        public virtual InternalOrg InternalOrg { get; set; }
    }
}
