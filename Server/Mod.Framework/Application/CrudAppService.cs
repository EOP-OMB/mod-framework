using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security;
using Microsoft.Extensions.Logging;

using Mod.Framework.Application.ObjectMapping;
using Mod.Framework.Domain.Entities;
using Mod.Framework.Domain.Repositories;
using Mod.Framework.Runtime.Session;

namespace Mod.Framework.Application
{
    public abstract class CrudAppService<TDto, TEntity> : CrudAppService<TDto, TEntity, int>
        where TDto : IDto<int>
        where TEntity : IEntity<int>, new()
    {
        public CrudAppService(IRepository<TEntity, int> repository, IObjectMapper objectMapper, ILogger<IAppService> logger, IModSession session) : base(repository, objectMapper, logger, session)
        {
        }
    }

    public abstract class CrudAppService<TDto, TEntity, TPrimaryKey> : CrudAppServiceBase<TDto, TEntity, TPrimaryKey>, ICrudAppService<TDto, TEntity, TPrimaryKey>
        where TDto : IDto<TPrimaryKey>
        where TEntity : IEntity<TPrimaryKey>, new()
    {
        public CrudAppService(IRepository<TEntity, TPrimaryKey> repository, IObjectMapper objectMapper, ILogger<IAppService> logger, IModSession session) : base(repository, objectMapper, logger, session)
        {
        }

        public virtual TDto Create(TDto dto)
        {
            if (!Permissions.CanCreate)
                throw new SecurityException("Access denied.  Cannot create object of type " + typeof(TEntity).Name);

            var e = new CrudEventArgs<TDto, TEntity>();
            var entity = MapToEntity(dto);

            e.Dto = dto;
            e.Entity = entity;

            OnBeforeCreate(e);

            if (!e.Cancel)
            {
                Repository.Insert(e.Entity);

                e.Dto = PostMap(MapToDto(e.Entity));

                OnCreated(e);
            }

            return e.Dto;
        }

        protected virtual void OnCreated(CrudEventArgs<TDto, TEntity> e)
        {
        }

        protected virtual void OnBeforeCreate(CrudEventArgs<TDto, TEntity> e)
        {
        }

        public virtual void Delete(TDto dto)
        {
            Delete(dto.Id);
        }

        public virtual void Delete(TPrimaryKey id)
        {
            if (!Permissions.CanDelete)
                throw new SecurityException("Access denied.  Cannot delete object of type " + typeof(TEntity).Name);

            Repository.Delete(id);
        }

        public virtual TDto Get(TPrimaryKey id)
        {
            if (!Permissions.CanRead)
                throw new SecurityException("Access denied.  Cannot read object of type " + typeof(TEntity).Name);

            var entity = Repository.Get(id, this.Permissions.PermissionFilter);

            return PostMap(MapToDto(entity));
        }

        public virtual TDto GetIncluding(TPrimaryKey id, params Expression<Func<TEntity, object>>[] propertySelectors)
        {
            if (!Permissions.CanRead)
                throw new SecurityException("Access denied.  Cannot read object of type " + typeof(TEntity).Name);

            var entity = Repository.GetIncluding(id, this.Permissions.PermissionFilter, propertySelectors);

            return PostMap(MapToDto(entity));
        }

        public virtual IEnumerable<TDto> GetAll()
        {
            if (!Permissions.CanRead)
                throw new SecurityException("Access denied.  Cannot read object of type " + typeof(TEntity).Name);

            var entities = Repository.GetAll(this.Permissions.PermissionFilter);

            return entities.Select(Map).ToList();
        }

        public virtual IEnumerable<TDto> GetAllIncluding(params Expression<Func<TEntity, object>>[] propertySelectors)
        {
            if (!Permissions.CanRead)
                throw new SecurityException("Access denied.  Cannot read object of type " + typeof(TEntity).Name);

            var entities = Repository.GetAllIncluding(this.Permissions.PermissionFilter, propertySelectors);

            return entities.Select(Map).ToList();
        }

        protected TDto Map(TEntity entity)
        {
            return PostMap(MapToDto(entity));
        }

        public virtual IEnumerable<TDto> GetBy(Expression<Func<TEntity, bool>> predicate)
        {
            if (!Permissions.CanRead)
                throw new SecurityException("Access denied.  Cannot read object of type " + typeof(TEntity).Name);

            var filterPredicate = predicate.And(Permissions.PermissionFilter);

            var entities = Repository.GetAll(filterPredicate);

            return entities.Select(Map).ToList();
        }

        public virtual IEnumerable<TDto> GetByIncluding(Expression<Func<TEntity, bool>> predicate, params Expression<Func<TEntity, object>>[] propertySelectors)
        {
            if (!Permissions.CanRead)
                throw new SecurityException("Access denied.  Cannot read object of type " + typeof(TEntity).Name);

            var filterPredicate = predicate.And(Permissions.PermissionFilter);

            var entities = Repository.GetAllIncluding(filterPredicate, propertySelectors);

            return entities.Select(Map).ToList();
        }

        public virtual TDto Update(TDto dto)
        {
            if (!Permissions.CanUpdate)
                throw new SecurityException("Access denied.  Cannot update object of type " + typeof(TEntity).Name);

            var e = new CrudEventArgs<TDto, TEntity>();
            var entity = Repository.Get(dto.Id, this.Permissions.PermissionFilter);

            e.Entity = entity;
            e.Dto = dto;

            OnBeforeUpdate(e);

            if (!e.Cancel)
            {
                MapToEntity(dto, e.Entity);

                Repository.Update(e.Entity);

                e.Dto = PostMap(MapToDto(e.Entity));

                OnUpdated(e);
            }

            return e.Dto;
        }

        protected virtual void OnUpdated(CrudEventArgs<TDto, TEntity> e)
        {
        }

        protected virtual void OnBeforeUpdate(CrudEventArgs<TDto, TEntity> e)
        {
        }

        protected virtual TDto PostMap(TDto dto)
        {
            return dto;
        }
    }
}
