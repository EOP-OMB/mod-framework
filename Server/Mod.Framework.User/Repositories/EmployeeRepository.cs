
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Distributed;
using Mod.Framework.Domain.Repositories;
using Mod.Framework.EfCore.Repositories;
using Mod.Framework.Extensions;
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
        public EmployeeRepository(IDistributedCache cache, UserContext context) : base(cache, context)
        {
        }

        public override Employee Get(int id)
        {
            var entity = GetAllQuery().SingleOrDefault(x => x.Id == id);

            return entity;
        }

        public Employee GetByUpn(string upn)
        {
            var entity = GetAllQuery().SingleOrDefault(x => x.Upn.ToLower() == upn.ToLower());

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

        public List<Employee> GetAllNoFilter()
        {
            var list = GetAllNoFilterQuery().ToList();

            return list;
        }

        public List<Employee> GetAllNoFilterIncluding(Expression<Func<Employee, bool>> predicate, params Expression<Func<Employee, object>>[] propertySelectors)
        {
            var query = GetAllNoFilterQuery();

            if (!propertySelectors.IsNullOrEmpty())
            {
                foreach (var propertySelector in propertySelectors)
                {
                    query = query.Include(propertySelector);
                }
            }
            
            var list = query.Where(predicate).ToList();

            return list;
        }

        private IQueryable<Employee> GetAllNoFilterQuery()
        {
            return GetAllQuery().IgnoreQueryFilters().Where(x => x.Dept == "OMB" || x.Company == "OMB");
        }

        public List<Employee> GetAllNoFilter(Expression<Func<Employee, bool>> predicate)
        {
            var list = GetAllNoFilterQuery().Where(predicate).ToList();

            return list;
        }

        public Employee GetNoFilter(int id)
        {
            var entity = GetAllQuery().IgnoreQueryFilters().Single(x => (x.Dept == "OMB" || x.Company == "OMB") && x.Id == id);

            return entity;
        }

        public override List<Employee> GetAll(Expression<Func<Employee, bool>> predicate)
        {
           return GetAllQuery().Where(predicate).ToList();
        }

        public List<Employee> GetAllInGroup(string group)
        {
            return GetAllQuery()
                .Where(x => x.Groups.Where(y => y.Name == group).Count() > 0).ToList();
        }

        public List<Employee> GetAllInGroups(string[] groups)
        {
            var list = new List<Employee>();
            
            foreach (string group in groups)
            {
                list.AddRange(GetAllInGroup(group));
            }

            list = list.GroupBy(x => x.Id).Select(x => x.First()).ToList();

            return list;
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
