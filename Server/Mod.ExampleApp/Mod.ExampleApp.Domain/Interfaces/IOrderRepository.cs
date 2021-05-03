using Mod.ExampleApp.Domain.Entities;
using Mod.Framework.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.ExampleApp.Domain.Interfaces
{
    public interface IOrderRepository : IRepository<Order>
    {
        
    }
}
