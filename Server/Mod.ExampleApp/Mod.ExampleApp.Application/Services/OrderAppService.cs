using Microsoft.Extensions.Logging;

using Mod.ExampleApp.Application.Dtos;
using Mod.ExampleApp.Domain.Entities;
using Mod.ExampleApp.Domain.Interfaces;
using Mod.Framework.Application;
using Mod.Framework.Application.ObjectMapping;
using Mod.Framework.Runtime.Session;
using System.Collections.Generic;
using System.Linq;

namespace Mod.ExampleApp.Application.Services
{
    public class OrderAppService : CrudAppService<OrderDto, Order>, IOrderAppService
    {
        public OrderAppService(IOrderRepository repository, IObjectMapper objectMapper, ILogger<IAppService> logger, IModSession session) : base(repository, objectMapper, logger, session)
        {
        }

        public override OrderDto Get(int id)
        {
            var entity = Repository.QueryIncluding(x => x.OrderItems).Where(x => x.Id == id).Single();

            return MapToDto(entity);
        }

        public override IEnumerable<OrderDto> GetAll()
        {
            var entities = Repository.QueryIncluding(x => x.OrderItems);

            return entities.Select(MapToDto).ToList();
        }
    }
}
