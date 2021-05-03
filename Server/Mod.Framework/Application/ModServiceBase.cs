using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;

using Mod.Framework.Application.ObjectMapping;
using Mod.Framework.Runtime.Security;
using Mod.Framework.Runtime.Session;

namespace Mod.Framework.Application
{
    public class ModServiceBase
    {
        protected ILogger Logger { get; set; }
        protected IModSession Session { get; set; }
        public IObjectMapper ObjectMapper { get; set; }

        public ModServiceBase()
        {
            Logger = NullLogger.Instance;
            Session = NullModSession.Instance;
            ObjectMapper = NullObjectMapper.Instance;
        }
    }
}
