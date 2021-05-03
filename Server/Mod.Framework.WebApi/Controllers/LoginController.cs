using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.WsFederation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Xml;
using Mod.Framework.Runtime.Security;
using Newtonsoft.Json;

namespace Mod.Framework.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class LoginController : ControllerBase
    {
        [Route("")]
        public async Task Login(string returnUrl)
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
            {
                var props = new AuthenticationProperties { RedirectUri = returnUrl };
                await HttpContext.ChallengeAsync(WsFederationDefaults.AuthenticationScheme, props);
            }
            else
                Response.RedirectToSafeUrl(returnUrl);
        }
    }
}
