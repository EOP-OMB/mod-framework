using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Distributed;
using Mod.Framework.Domain.Entities;
using System.Text.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Xml.Serialization;

namespace Mod.Framework.EfCore.Repositories
{
    public abstract class CachedRepositoryBase<TDbContext, TEntity> : CachedRepositoryBase<TDbContext, TEntity, int>
         where TEntity : class, IEntity<int>
         where TDbContext : DbContext
    {
        public CachedRepositoryBase(IDistributedCache cache, TDbContext context) : base(cache, context)
        {
        }
    }

    public abstract class CachedRepositoryBase<TDbContext, TEntity, TPrimaryKey> : EfRepositoryBase<TDbContext, TEntity, TPrimaryKey>
        where TEntity : class, IEntity<TPrimaryKey>
        where TDbContext : DbContext

    {
        protected readonly static string CacheName = "Cache-" + (typeof(TEntity)).ToString();
        protected IDistributedCache Cache { get; private set; }

        public CachedRepositoryBase(IDistributedCache cache, TDbContext context) : base(context)
        {
            Cache = cache;
        }

        public override void SaveChanges()
        {
            base.SaveChanges();
            Cache.Remove(CacheName);
        }

        protected TEntity FromCache(string name)
        {
            var bytes = Cache.Get(name);
            TEntity entity = null;

            if (bytes != null)
            {
                entity = JsonSerializer.Deserialize<TEntity>(bytes);
            }

            return entity;
        }

        protected List<TEntity> FromCacheList(string name)
        {
            var bytes = Cache.Get(name);
            List<TEntity> list = null;

            if (bytes != null)
            {
                list = JsonSerializer.Deserialize<List<TEntity>>(bytes);
            }

            return list;
        }   

        protected void ToCache(string name, TEntity entity)
        {
            var bytes = JsonSerializer.SerializeToUtf8Bytes(entity);
            Cache.Set(name, bytes);
        }

        protected void ToCache(string name, List<TEntity> list)
        {
            var bytes = JsonSerializer.SerializeToUtf8Bytes(list);
            Cache.Set(name, bytes);
        }

        public override TEntity Get(TPrimaryKey id)
        {
            var name = GetIdString(id);
            TEntity entity = FromCache(name);

            if (entity == null)
            {
                entity = base.Get(id);
                ToCache(name, entity);
            }
            else
            {
                AttachIfNot(entity);
            }

            return entity;
        }

        public override List<TEntity> GetAll()
        {
            List<TEntity> list = FromCacheList(CacheName);

            if (list == null)
            {
                list = base.GetAll();
                ToCache(CacheName, list);
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
            Cache.Remove(CacheName);
            Cache.Remove(GetIdString(entity.Id));
        }

        protected string GetIdString(TPrimaryKey id)
        {
            return CacheName + id.ToString();
        }
    }
}