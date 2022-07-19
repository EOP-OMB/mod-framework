using Mod.Framework.EfCore.Repositories;
using Mod.Framework.User.Entities;
using Mod.Framework.User.Interfaces;

namespace Mod.Framework.User.Repositories
{
    public class EmployeeAttributeRepository : EfRepositoryBase<UserContext, EmployeeAttribute>, IEmployeeAttributeRepository
    {
        public EmployeeAttributeRepository(UserContext context) : base(context)
        {
        }
    }
}
