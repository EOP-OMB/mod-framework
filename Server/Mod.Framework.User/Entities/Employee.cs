using Mod.Framework.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Mod.Framework.User.Entities
{
    public class Employee : Entity
    {
        public string Ein { get; set; }
        public string Upn { get; set; }
        public string SamAccountName { get; set; }
        public string Type { get; set; }

        public string Company { get; set; }
        public string Dept { get; set; }  // Department
        public string Division { get; set; }
        public string Office { get; set; }

        public string GivenName { get; set; }
        public string MiddleName { get; set; }  // Initials
        public string Surname { get; set; }
        public string PreferredName { get; set; }
        public string DisplayName { get; set; }
        public string Title { get; set; }
        public string EmailAddress { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PostalCode { get; set; }
        public string OfficePhone { get; set; }
        public string MobilePhone { get; set; }
        public string MailNickName { get; set; }

        public bool Inactive { get; set; }
        public DateTime? InactiveDate { get; set; }

        public string ManagerEin { get; set; }

        public DateTime CreatedTime { get; set; }
        public DateTime ModifiedTime { get; set; }

        public int? ReportsToEmployeeId { get; set; }

        public int? DepartmentId { get; set; }

        public virtual Employee ReportsTo { get; set; }

        public virtual ICollection<Employee> DirectReports { get; set; }
        public virtual ICollection<EmployeeGroup> Groups { get; set; }

        public void UpdateAttribute(string key, string value)
        {
            var attr = this.GetAttribute(key);

            if (attr == null)
            {
                attr = new EmployeeAttribute
                {
                    Attribute = key
                };

                this.EmployeeAttributes.Add(attr);
            }            

            attr.Value = value;
        }

        public void AddAttribute(string v, string profileImage)
        {
            throw new NotImplementedException();
        }

        public bool HasAttribute(string key)
        {
            return this.EmployeeAttributes != null && this.EmployeeAttributes.Where(x => x.Attribute == key).Count() > 0;
        }

        public string GetAttributeValue(string key)
        {
            var attr = GetAttribute(key);

            return attr == null ? null : attr.Value;
        }

        public void SetAttributeValue(string key, string value)
        {
            var attr = GetAttribute(key);

            if (attr == null)
            {
                attr = new EmployeeAttribute() { Attribute = key };
                this.EmployeeAttributes.Add(attr);
            }
                
            attr.Value = value;
        }

        public bool HasAttributeValue(string key)
        {
            var attr = GetAttribute(key);

            return attr != null && !string.IsNullOrEmpty(attr.Value);
        }

        public EmployeeAttribute GetAttribute(string key)
        {
            if (this.HasAttribute(key))
            {
                return this.EmployeeAttributes.Where(x => x.Attribute == key).FirstOrDefault();
            }
            else
            {
                return null;
            }
        }

        public virtual Department Department { get; set; }

        public virtual ICollection<EmployeeAttribute> EmployeeAttributes { get; set; }

        public string ManagerName
        {
            get
            {
                return this.ReportsTo?.DisplayName;
            }
        }
    }
}
