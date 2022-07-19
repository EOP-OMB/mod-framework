using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Distributed;
using Mod.Framework.EfCore.Repositories;
using Mod.Framework.User.Entities;
using Mod.Framework.User.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace Mod.Framework.User.Repositories
{
    public class DepartmentRepository : CachedRepositoryBase<UserContext, Department>, IDepartmentRepository
    {
        public DepartmentRepository(IDistributedCache cache, UserContext context) : base(cache, context)
        {
        }

        //public override Department Get(int id)
        //{
        //    var name = GetIdString(id);
        //    var entity = FromCache(name);

        //    if (entity == null)
        //    {
        //        entity = Table.AsQueryable()
        //            .Include(x => x.Children)
        //            .Include(x => x.Employees)
        //                .ThenInclude(x => x.EmployeeAttributes)
        //            .Include(x => x.InternalOrg)
        //            .Single(x => x.Id == id);
        //        ToCache(name, entity);
        //    }
            
        //    return entity;
        //}

        public List<Department> GetRoot()
        {
            var list = FromCacheList(CacheName);
            
            if (list == null)
            {
                list = base.Query().Where(x => x.ParentDepartmentId == null).ToList();
                ToCache(CacheName, list);
            }
            
            return list;
        }
    }
}
