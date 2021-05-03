using Mod.Framework.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.ExampleApp.Domain.Entities
{
    public class Order : FullAuditedEntity
    {
        public string InvoiceNumber { get; set; }
        public string CustomerName { get; set; }

        public virtual ICollection<OrderItem> OrderItems { get;set; }

        public double Total
        {
            get
            {
                var cost = 0.0;
                if (OrderItems != null)
                {
                    foreach (var oi in OrderItems)
                    {
                        cost += (oi.Qty * oi.Price);
                    }
                }

                return cost;
            }
        }
    }
}
