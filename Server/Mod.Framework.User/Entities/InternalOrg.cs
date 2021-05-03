using Mod.Framework.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.User.Entities
{
    public class InternalOrg : Entity
    {
        public string Code { get; set; }
        public string Abbreviation { get; set; }
        public string Description { get; set; }
    }
}
