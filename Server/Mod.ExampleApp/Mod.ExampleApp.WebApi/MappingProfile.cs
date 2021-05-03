using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using AutoMapper;

using Mod.ExampleApp.Domain.Entities;
using Mod.ExampleApp.Application.Dtos;

namespace Mod.ExampleApp.WebApi
{
    public class MappingProfile : AutoMapper.Profile
    {
        public MappingProfile()
        {
            CreateMap<OrderDto, Order>().ReverseMap();
            CreateMap<OrderItemDto, OrderItem>().ReverseMap();
        }
    }
}
