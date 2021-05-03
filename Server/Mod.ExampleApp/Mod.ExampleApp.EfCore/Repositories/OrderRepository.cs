using Mod.ExampleApp.Domain.Entities;
using Mod.ExampleApp.Domain.Interfaces;
using Mod.Framework.EfCore;
using Mod.Framework.EfCore.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.ExampleApp.EfCore.Repositories
{
    public class OrderRepository : EfRepositoryBase<ExampleAppContext, Order>, IOrderRepository
    {
        public OrderRepository(ExampleAppContext context) : base(context)
        {
            
        }

        public void AddItemToOrder()
        {

        }
    }
}
