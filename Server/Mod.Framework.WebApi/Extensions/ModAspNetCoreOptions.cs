using Mod.Framework.Runtime.Security;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.WebApi.Extensions
{
    public class ModAspNetCoreOptions
    {
        public ModAspNetCoreOptions()
        {
            this.ApplicationRoles = new ApplicationRoles();
        }

        public ApplicationRoles ApplicationRoles { get; set; }
    }
}
