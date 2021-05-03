using Microsoft.Extensions.Logging;

using Mod.Framework.Application.ObjectMapping;
using Mod.Framework.Runtime.Security;
using Mod.Framework.Runtime.Session;
using System.Security;

namespace Mod.Framework.Application
{
    public abstract class AppService : ModServiceBase
    {
        public AppService(IObjectMapper objectMapper, ILogger logger, IModSession session) : base()
        {
            Logger = logger;
            ObjectMapper = objectMapper;
            Session = session;
        }
    }
}
