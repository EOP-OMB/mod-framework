using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Mod.Framework.Runtime.Security
{
    public interface IPermissions<TEntity>
    {
        bool CanCreate { get; set; }
        bool CanRead { get; set; }
        bool CanUpdate { get; set; }
        bool CanDelete { get; set; }
        
        Expression<Func<TEntity, bool>> PermissionFilter { get; set; }
    }
}
