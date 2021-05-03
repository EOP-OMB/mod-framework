using Mod.Framework.Domain.Entities;
using Mod.Framework.Domain.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace Mod.Framework.Domain.Repositories
{
    public abstract class RepositoryBase<TEntity> : RepositoryBase<TEntity, int> where TEntity : class, IEntity<int>
    {
    }

    public abstract class RepositoryBase<TEntity, TPrimaryKey> : IRepository<TEntity, TPrimaryKey>
        where TEntity : class, IEntity<TPrimaryKey>
    {
        public abstract void SaveChanges();

        public virtual int Count()
        {
            return Query().Count();
        }

        public virtual int Count(Expression<Func<TEntity, bool>> predicate)
        {
            return Query().Count(predicate);
        }

        public abstract void Delete(TEntity entity);

        public abstract void Delete(TPrimaryKey id);

        public virtual void Delete(Expression<Func<TEntity, bool>> predicate)
        {
            foreach (var entity in GetAll(predicate))
            {
                Delete(entity);
            }
        }

        public abstract void DeleteBulk(TEntity entity);


        public abstract void DeleteBulk(TPrimaryKey id);

        public virtual TEntity FirstOrDefault(TPrimaryKey id)
        {
            return Query().FirstOrDefault(CreateEqualityExpressionForId(id));
        }

        public virtual TEntity FirstOrDefault(Expression<Func<TEntity, bool>> predicate)
        {
            return Query().FirstOrDefault(predicate);
        }

        public virtual TEntity Get(TPrimaryKey id)
        {
            var entity = Single(id);
            
            return entity;
        }


        public virtual TEntity GetIncluding(TPrimaryKey id, params Expression<Func<TEntity, object>>[] propertySelectors)
        {
            return QueryIncluding(propertySelectors).Single(CreateEqualityExpressionForId(id));
        }

        public virtual List<TEntity> GetAll()
        {
            return Query().ToList();
        }

        public virtual List<TEntity> GetAllIncluding(params Expression<Func<TEntity, object>>[] propertySelectors)
        {
            return QueryIncluding(propertySelectors).ToList();
        }

        public virtual List<TEntity> GetAll(Expression<Func<TEntity, bool>> predicate)
        {
            return Query().Where(predicate).ToList();
        }

        public virtual List<TEntity> GetAllIncluding(Expression<Func<TEntity, bool>> predicate, params Expression<Func<TEntity, object>>[] propertySelectors)
        {
            return QueryIncluding(propertySelectors).Where(predicate).ToList();
        }


        public abstract TEntity InsertBulk(TEntity entity);

        public abstract TEntity Insert(TEntity entity);

        public TPrimaryKey InsertAndGetId(TEntity entity)
        {
            return Insert(entity).Id;
        }

        public long LongCount()
        {
            return Query().LongCount();
        }

        public long LongCount(Expression<Func<TEntity, bool>> predicate)
        {
            return Query().LongCount(predicate);
        }

        public abstract IQueryable<TEntity> Query();

        public virtual IQueryable<TEntity> QueryIncluding(params Expression<Func<TEntity, object>>[] propertySelectors)
        {
            return Query();
        }

        public virtual T Query<T>(Func<IQueryable<TEntity>, T> queryMethod)
        {
            return queryMethod(Query());
        }

        public virtual TEntity Save(TEntity entity)
        {
            return entity.IsTransient()
                ? Insert(entity)
                : Update(entity);
        }


        public abstract TEntity SaveBulk(TEntity entity);

        public virtual TPrimaryKey SaveAndGetId(TEntity entity)
        {
            return Save(entity).Id;
        }

        public virtual TEntity Single(TPrimaryKey id)
        {
            return Query().Single(CreateEqualityExpressionForId(id));
        }

        public virtual TEntity Single(Expression<Func<TEntity, bool>> predicate)
        {
            return Query().Single(predicate);
        }

        public abstract TEntity Update(TEntity entity);

        public abstract TEntity UpdateBulk(TEntity entity);

        protected virtual Expression<Func<TEntity, bool>> CreateEqualityExpressionForId(TPrimaryKey id)
        {
            var lambdaParam = Expression.Parameter(typeof(TEntity));

            var leftExpression = Expression.PropertyOrField(lambdaParam, "Id");

            var idValue = Convert.ChangeType(id, typeof(TPrimaryKey));

            Expression<Func<object>> closure = () => idValue;
            var rightExpression = Expression.Convert(closure.Body, leftExpression.Type);

            var lambdaBody = Expression.Equal(leftExpression, rightExpression);

            return Expression.Lambda<Func<TEntity, bool>>(lambdaBody, lambdaParam);
        }
    }
}
