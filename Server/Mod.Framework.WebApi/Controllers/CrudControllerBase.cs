using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using Mod.Framework.Application;
using Mod.Framework.Runtime.Security;

namespace Mod.Framework.WebApi.Controllers
{
    public abstract class CrudControllerBase<TDto, TEntity> : CrudControllerBase<TDto, TEntity, int>
    {
        public CrudControllerBase(ILogger logger, ICrudAppService<TDto, TEntity, int> service) : base(logger, service)
        {
        }
    }

    public abstract class CrudControllerBase<TDto, TEntity, TPrimaryKey> : ModControllerBase
    {
        public new ICrudAppService<TDto, TEntity, TPrimaryKey> Service { get; private set; }

        public CrudControllerBase(ILogger logger, ICrudAppService<TDto, TEntity, TPrimaryKey> service) : base(logger, service)
        {
            Service = service;
        }

        [HttpGet]
        public virtual ActionResult<IEnumerable<TDto>> Get()
        {
            var list = Service.GetAll();

            return Json(list);
        }

        [HttpGet("{id}")]
        public virtual ActionResult<TDto> Get(TPrimaryKey id)
        {
            var list = Service.Get(id);

            return Json(list);
        }

        [HttpPut("{id}")]
        public virtual ActionResult<TDto> Update(TPrimaryKey id, TDto dto)
        {
            return Service.Update(dto);
        }

        [HttpPost]
        public virtual ActionResult<TDto> Create(TDto dto)
        {
            return Service.Create(dto);
        }

        [HttpDelete("{id}")]
        public virtual ActionResult<TDto> Delete(TPrimaryKey id)
        {
            Service.Delete(id);
            return Ok();
        }
    }
}
