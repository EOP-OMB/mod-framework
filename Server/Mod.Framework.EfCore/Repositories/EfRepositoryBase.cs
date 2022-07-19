using Microsoft.EntityFrameworkCore;
using Mod.Framework.Domain.Entities;
using Mod.Framework.Domain.Repositories;
using Mod.Framework.Extensions;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace Mod.Framework.EfCore.Repositories
{
    public abstract class EfRepositoryBase<TDbContext, TEntity> : EfRepositoryBase<TDbContext, TEntity, int>
        where TEntity : class, IEntity<int>
        where TDbContext : DbContext
    {
        public EfRepositoryBase(TDbContext context) : base(context)
        {
        }
    }

    public abstract class EfRepositoryBase<TDbContext, TEntity, TPrimaryKey> : RepositoryBase<TEntity, TPrimaryKey>, IRepository<TEntity, TPrimaryKey>, IRepositoryWithDbContext
        where TEntity : class, IEntity<TPrimaryKey>
        where TDbContext : DbContext

    {
        public TDbContext Context { get; private set; }

        public EfRepositoryBase(TDbContext context)
        {
            Context = context;
        }

        /// <summary>
        /// Gets DbSet for given entity.
        /// </summary>
        public virtual DbSet<TEntity> Table => Context.Set<TEntity>();

        public override void SaveChanges()
        {
            this.Context.SaveChanges();
        }

        public override TEntity SaveBulk(TEntity entity)
        {
            return entity.IsTransient()
                ? InsertBulk(entity)
                : UpdateBulk(entity);
        }

        public override void Delete(TEntity entity)
        {
            DeleteBulk(entity);
            Context.SaveChanges();
        }

        public override void DeleteBulk(TEntity entity)
        {
            AttachIfNot(entity);
            Table.Remove(entity);
        }

        public override void Delete(TPrimaryKey id)
        {
            DeleteById(id, false);
        }

        public override void DeleteBulk(TPrimaryKey id)
        {
            DeleteById(id, true);
        }

        private void DeleteById(TPrimaryKey id, bool isBulk)
        {
            var entity = GetFromChangeTrackerOrNull(id);
            if (entity != null)
            {
                if (isBulk)
                    DeleteBulk(entity);
                else
                    Delete(entity);
                return;
            }

            entity = FirstOrDefault(id);
            if (entity != null)
            {
                if (isBulk)
                    DeleteBulk(entity);
                else
                    Delete(entity);
                return;
            }
        }

        public override TEntity Insert(TEntity entity)
        {
            entity = InsertBulk(entity);

            if (entity.IsTransient())
            {
                Context.SaveChanges();
            }

            return entity;
        }

        public override TEntity InsertBulk(TEntity entity)
        {
            return Table.Add(entity).Entity;
        }

        public override IQueryable<TEntity> Query()
        {
            return QueryIncluding();
        }

        public override IQueryable<TEntity> QueryIncluding(params Expression<Func<TEntity, object>>[] propertySelectors)
        {
            var query = Table.AsQueryable();

            if (!propertySelectors.IsNullOrEmpty())
            {
                foreach (var propertySelector in propertySelectors)
                {
                    query = query.Include(propertySelector);
                }
            }

            return query;
        }

        public override TEntity Update(TEntity entity)
        {
            UpdateBulk(entity);
            Context.SaveChanges();

            return entity;
        }

        public override TEntity UpdateBulk(TEntity entity)
        {
            AttachIfNot(entity);
            Context.Entry(entity).State = EntityState.Modified;

            return entity;
        }

        protected virtual void AttachIfNot(TEntity entity)
        {
            var entry = Context.ChangeTracker.Entries().FirstOrDefault(ent => ent != null && ent.Entity.Equals(entity));
            if (entry != null)
            {
                return;
            }

            Table.Attach(entity);
        }

        public DbContext GetDbContext()
        {
            return Context;
        }

        private TEntity GetFromChangeTrackerOrNull(TPrimaryKey id)
        {
            var entry = Context.ChangeTracker.Entries()
                .FirstOrDefault(
                    ent =>
                        ent.Entity is TEntity &&
                        EqualityComparer<TPrimaryKey>.Default.Equals(id, (ent.Entity as TEntity).Id)
                );

            return entry?.Entity as TEntity;
        }
    }
}
