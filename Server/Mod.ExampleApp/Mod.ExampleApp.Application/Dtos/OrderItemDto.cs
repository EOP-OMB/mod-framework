using Mod.Framework.Application;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.ExampleApp.Application.Dtos
{
    public class OrderItemDto : IDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Qty { get; set; }
        public float Price { get; set; }
    }
}
