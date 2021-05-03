using Microsoft.EntityFrameworkCore;
using Mod.Framework.EfCore.Repositories;
using Mod.Framework.User.Entities;
using Mod.Framework.User.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace Mod.Framework.User.Repositories
{
    public class DepartmentRepository : CachedRepositoryBase<UserContext, Department>, IDepartmentRepository
    {
        public DepartmentRepository(UserContext context) : base(context)
        {
        }

        public override Department Get(int id)
        {
            var entity = Table.AsQueryable()
                    .Include(x => x.Children)
                    .Include(x => x.Employees)
                        .ThenInclude(x => x.EmployeeAttributes)
                    .Include(x => x.InternalOrg)
                    .Single(x => x.Id == id);

            return entity;
        }
        public override List<Department> GetAll()
        {
            return base.Query().Where(x => x.ParentDepartmentId == null).ToList();
        }
    }
}
