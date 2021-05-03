using Mod.Framework.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.ExampleApp.Domain.Entities
{
    public class OrderItem : FullAuditedEntity
    {
        public string Name { get; set; }
        public int Qty { get; set; }
        public float Price { get; set; }

        public virtual Order Order { get; set; }
    }
}
