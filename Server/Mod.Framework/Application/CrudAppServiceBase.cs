using Microsoft.Extensions.Logging;

using Mod.Framework.Application.ObjectMapping;
using Mod.Framework.Domain.Entities;
using Mod.Framework.Domain.Repositories;
using Mod.Framework.Runtime.Security;
using Mod.Framework.Runtime.Session;

namespace Mod.Framework.Application
{
    public abstract class CrudAppServiceBase<TDto, TEntity, TPrimaryKey> : AppService
        where TEntity : IEntity<TPrimaryKey>
        where TDto : IDto<TPrimaryKey>
    {
        protected readonly IRepository<TEntity, TPrimaryKey> Repository;
        public IPermissions<TEntity> Permissions { get; set; }

        public CrudAppServiceBase(IRepository<TEntity, TPrimaryKey> repository, IObjectMapper objectMapper, ILogger<IAppService> logger, IModSession session) : base(objectMapper, logger, session)
        {
            Repository = repository;
            SetPermissions();
        }

        protected virtual void SetPermissions()
        {
            Permissions = TruePermissions<TEntity>.Instance;
        }

        /// <summary>
        /// Maps <typeparamref name="TEntity"/> to <typeparamref name="TDto"/>.
        /// It uses <see cref="IObjectMapper"/> by default.
        /// It can be overrided for custom mapping.
        /// </summary>
        protected virtual TDto MapToDto(TEntity entity)
        {
            return ObjectMapper.Map<TDto>(entity);
        }

        /// <summary>
        /// Maps <typeparamref name="TDto"/> to <typeparamref name="TEntity"/> to create a new entity.
        /// It uses <see cref="IObjectMapper"/> by default.
        /// It can be overrided for custom mapping.
        /// </summary>
        protected virtual TEntity MapToEntity(TDto createInput)
        {
            return ObjectMapper.Map<TEntity>(createInput);
        }

        /// <summary>
        /// Maps <typeparamref name="TUpdateInput"/> to <typeparamref name="TEntity"/> to update the entity.
        /// It uses <see cref="IObjectMapper"/> by default.
        /// It can be overrided for custom mapping.
        /// </summary>
        protected virtual void MapToEntity(TDto updateInput, TEntity entity)
        {
            ObjectMapper.Map(updateInput, entity);
        }
    }
}
