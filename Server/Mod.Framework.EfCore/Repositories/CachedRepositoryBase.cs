using Microsoft.EntityFrameworkCore;
using Mod.Framework.Domain.Entities;
using Mod.Framework.Domain.Repositories;
using Mod.Framework.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Mod.Framework.EfCore.Repositories
{
    public abstract class CachedRepositoryBase<TDbContext, TEntity> : CachedRepositoryBase<TDbContext, TEntity, int>
         where TEntity : class, IEntity<int>
         where TDbContext : DbContext
    {
        public CachedRepositoryBase(TDbContext context) : base(context)
        {
        }
    }

    public abstract class CachedRepositoryBase<TDbContext, TEntity, TPrimaryKey> : EfRepositoryBase<TDbContext, TEntity, TPrimaryKey>
        where TEntity : class, IEntity<TPrimaryKey>
        where TDbContext : DbContext

    {
        protected readonly static string CacheName = "Cache-" + (typeof(TEntity)).ToString();

        public CachedRepositoryBase(TDbContext context) : base(context)
        {
        }

        public override TEntity Get(TPrimaryKey id)
        {
            var name = GetIdString(id);
            TEntity entity = (TEntity)MemCache.Get(name);

            if (entity == null)
            {
                entity = base.Get(id);
                MemCache.Add(name, entity);
            }
            else
            {
                AttachIfNot(entity);
            }

            return entity;
        }

        public override List<TEntity> GetAll()
        {
            List<TEntity> list = (List<TEntity>)MemCache.Get(CacheName);

            if (list == null)
            {
                list = base.GetAll();
                MemCache.Add(CacheName, list);
            }

            return list;
        }

        public override TEntity Save(TEntity entity)
        {
            return base.Save(entity);
        }

        public override TEntity Insert(TEntity entity)
        {
            ClearCache(entity);
            return base.Insert(entity);
        }

        public override TEntity Update(TEntity entity)
        {
            ClearCache(entity);
            return base.Update(entity);
        }

        public override void Delete(TEntity entity)
        {
            ClearCache(entity);
            base.Delete(entity);
        }

        private void ClearCache(TEntity entity)
        {
            MemCache.Clear(CacheName);
            MemCache.Clear(GetIdString(entity.Id));
        }

        protected string GetIdString(TPrimaryKey id)
        {
            return CacheName + id.ToString();
        }
    }
}