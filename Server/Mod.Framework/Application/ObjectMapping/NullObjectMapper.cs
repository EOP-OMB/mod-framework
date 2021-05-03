using System.Linq;

using Mod.Framework.Dependency;
using Mod.Framework.Exceptions;


namespace Mod.Framework.Application.ObjectMapping
{
    public sealed class NullObjectMapper : IObjectMapper, ISingletonDependency
    {
        /// <summary>
        /// Singleton instance.
        /// </summary>
        public static NullObjectMapper Instance { get; } = new NullObjectMapper();

        public TDestination Map<TDestination>(object source)
        {
            throw new ModException("ObjectMapping.IObjectMapper should be implemented in order to map objects.");
        }

        public TDestination Map<TSource, TDestination>(TSource source, TDestination destination)
        {
            throw new ModException("ObjectMapping.IObjectMapper should be implemented in order to map objects.");
        }

        public IQueryable<TDestination> ProjectTo<TDestination>(IQueryable source)
        {
            throw new ModException("ObjectMapping.IObjectMapper should be implemented in order to map objects.");
        }
    }
}
