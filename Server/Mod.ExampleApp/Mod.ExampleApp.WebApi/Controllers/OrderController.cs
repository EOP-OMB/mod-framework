using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using Mod.ExampleApp.Application.Dtos;
using Mod.ExampleApp.Application.Services;
using Mod.ExampleApp.Domain.Entities;
using Mod.Framework.WebApi.Controllers;

namespace Mod.ExampleApp.API.Controllers
{
    public class OrderController : CrudControllerBase<OrderDto, Order>
    {
        public OrderController(ILogger<OrderController> logger, IOrderAppService service) : base(logger, service)
        {
        }
    }
}