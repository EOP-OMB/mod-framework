using Mod.Framework.Domain.Repositories;
using Mod.Framework.User.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace Mod.Framework.User.Interfaces
{
    public interface IEmployeeRepository : IRepository<Employee>
    {
        List<Employee> GetAllInGroup(string group);
        List<Employee> GetAllInGroups(string[] groups);
        IQueryable<Employee> FreeTextSearch(string query);

        List<Employee> GetAllNoFilter();
        List<Employee> GetAllNoFilter(Expression<Func<Employee, bool>> predicate);
        List<Employee> GetAllNoFilterIncluding(Expression<Func<Employee, bool>> predicate, params Expression<Func<Employee, object>>[] propertySelectors);
        Employee GetNoFilter(int id);
    }
}
