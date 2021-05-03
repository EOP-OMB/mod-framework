using Mod.Framework.Domain.Repositories;
using Mod.Framework.User.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Mod.Framework.User.Interfaces
{
    public interface IEmployeeRepository : IRepository<Employee>
    {
        List<Employee> GetAllInGroup(string group);

        IQueryable<Employee> FreeTextSearch(string query);
    }
}
