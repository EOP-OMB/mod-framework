
using Microsoft.EntityFrameworkCore;
using Mod.Framework.Domain.Repositories;
using Mod.Framework.EfCore.Repositories;
using Mod.Framework.User.Entities;
using Mod.Framework.User.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Mod.Framework.User.Repositories
{
    public class EmployeeRepository : CachedRepositoryBase<UserContext, Employee>, IEmployeeRepository
    {
        public EmployeeRepository(UserContext context) : base(context)
        {
        }

        public override Employee Get(int id)
        {
            var entity = GetAllQuery().Single(x => x.Id == id);

            return entity;
        }

        public override List<Employee> GetAll()
        {
            List<Employee> list = (List<Employee>)MemCache.Get(CacheName);

            if (list == null)
            {
                list = GetAllQuery().ToList();

                MemCache.Add(CacheName, list);
            }

            return list;
        }

        public override List<Employee> GetAll(Expression<Func<Employee, bool>> predicate)
        {
           return GetAllQuery().Where(predicate).ToList();
        }

        public List<Employee> GetAllInGroup(string group)
        {
            return GetAllQuery()
               .Include(eg => eg.Groups)
                .Where(x => x.Groups.Where(y => y.Name == group).Count() > 0).ToList();
        }

        private IQueryable<Employee> GetAllQuery()
        {
            return Table.AsQueryable()
               .Include(dr => dr.DirectReports)
                   .ThenInclude(ea => ea.EmployeeAttributes)
               .Include(rt => rt.ReportsTo)
                   .ThenInclude(ea => ea.EmployeeAttributes)
               .Include(dpt => dpt.Department)
               .Include(ea => ea.EmployeeAttributes);
        }

        public IQueryable<Employee> FreeTextSearch(string query)
        {
            var results = Context.Employees.Where(f => EF.Functions.FreeText(f.DisplayName, query));

            return results;
        }
    }
}
