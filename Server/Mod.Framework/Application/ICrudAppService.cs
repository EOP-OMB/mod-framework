using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Mod.Framework.Application
{
    public interface ICrudAppService<TDto, TEntity> : ICrudAppService<TDto, TEntity, int>
    {

    }

    public interface ICrudAppService<TDto, TEntity, TPrimaryKey> : IAppService
    {
        IEnumerable<TDto> GetAll();

        TDto Get(TPrimaryKey id);

        IEnumerable<TDto> GetBy(Expression<Func<TEntity, bool>> predicate);

        IEnumerable<TDto> GetByIncluding(Expression<Func<TEntity, bool>> predicate, params Expression<Func<TEntity, object>>[] propertySelectors);

        TDto Create(TDto dto);

        void Delete(TDto dto);

        void Delete(TPrimaryKey id);

        TDto Update(TDto dto);
    }
}
