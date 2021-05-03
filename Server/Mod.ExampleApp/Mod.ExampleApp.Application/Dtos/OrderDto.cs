using Mod.ExampleApp.Domain.Entities;
using Mod.Framework.Application;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.ExampleApp.Application.Dtos
{
    public class OrderDto : IDto
    {
        public int Id { get; set; }
        public string InvoiceNumber { get; set; }
        public string CustomerName { get; set; }
        public double Total { get; set; }

        public List<OrderItemDto> OrderItems { get; set; }
    }
}
