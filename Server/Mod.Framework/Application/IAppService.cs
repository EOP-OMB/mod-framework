using Microsoft.Extensions.Logging;
using Mod.Framework.Application.ObjectMapping;
using Mod.Framework.Dependency;
using Mod.Framework.Runtime.Session;

namespace Mod.Framework.Application
{
    /// <summary>
    /// This interface must be implemented by all application services to identify them by convention.
    /// </summary>
    public interface IAppService : ITransientDependency
    {
    }
}
