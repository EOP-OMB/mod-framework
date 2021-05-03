using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Mod.Framework.Runtime.Security
{
    public class Permissions<TEntity> : IPermissions<TEntity>
    {
        public bool CanCreate { get; set; }
        public bool CanRead { get; set; }
        public bool CanUpdate { get; set; }
        public bool CanDelete { get; set; }

        public Expression<Func<TEntity, bool>> PermissionFilter { get; set; }

    }
}
