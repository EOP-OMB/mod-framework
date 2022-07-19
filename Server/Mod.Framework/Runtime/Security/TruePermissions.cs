using Mod.Framework.Domain.Entities;
using Mod.Framework.Runtime.Security;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Runtime.Security
{
    public class TruePermissions<TEntity> : Permissions<TEntity> 
    {
        public static TruePermissions<TEntity> Instance { get; } = new TruePermissions<TEntity>();

        private TruePermissions()
        {
            CanCreate = true;
            CanRead = true;
            CanUpdate = true;
            CanDelete = true;
        }
    }
}
