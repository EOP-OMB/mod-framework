using Mod.ExampleApp.Application.Dtos;
using Mod.ExampleApp.Domain.Entities;
using Mod.Framework.Application;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.ExampleApp.Application.Services
{
    public interface IOrderAppService : ICrudAppService<OrderDto, Order>
    {
    }
}
