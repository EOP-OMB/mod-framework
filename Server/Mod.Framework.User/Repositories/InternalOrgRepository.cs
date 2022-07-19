using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Distributed;
using Mod.Framework.EfCore.Repositories;
using Mod.Framework.User.Entities;
using Mod.Framework.User.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace Mod.Framework.User.Repositories
{
    public class InternalOrgRepository : CachedRepositoryBase<UserContext, InternalOrg>, IInternalOrgRepository
    {
        public InternalOrgRepository(IDistributedCache cache, UserContext context) : base(cache, context)
        {
        }
    }
}
