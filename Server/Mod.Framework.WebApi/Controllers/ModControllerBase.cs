using System;
using System.Security.Principal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

using Mod.Framework.Application;
using Mod.Framework.Runtime.Security;

namespace Mod.Framework.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModControllerBase : Controller
    {
        public IAppService Service { get; private set; }
        public IModPrincipal CurrentUser 
        { 
            get
            {
                return HttpContext != null ? HttpContext.User as ModPrincipal : null;
            }
        }

        public ILogger Logger { get; private set; }

        public ModControllerBase(ILogger logger, IAppService service) : base()
        {
            Service = service;
            Logger = logger;
        }

        public JsonSerializerSettings CamelCase
        {
            get
            {
                return new JsonSerializerSettings
                {
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                };
            }
        }

        public override JsonResult Json(Object data)
        {
            return Json(data, CamelCase);
        }
    }
}
