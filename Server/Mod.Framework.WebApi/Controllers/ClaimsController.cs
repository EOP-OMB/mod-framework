using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Claims;
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
    [ApiExplorerSettings(IgnoreApi = true)]
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ClaimsController : ControllerBase
    {
        [HttpGet]
        [Route("GetClaims")]
        public ActionResult<List<object>> GetClaims()
        {
            if (!User.Identity.IsAuthenticated)
            {
                return Unauthorized();
            }
            return new List<object>(User.Claims.Select(x => new
            {
                x.Type,
                x.Value,
                x.Issuer,
                x.OriginalIssuer,
                x.ValueType
            }).ToList());
        }

        [HttpGet]
        [Route("user")]
        public ActionResult<string> GetUser()
        {
            return JsonConvert.SerializeObject(User as ModPrincipal);
        }

        [HttpGet]
        // Only allow OMB_ALL group members to access this endpoint
        [HttpGet]
        [Route("restricted")]
        [Authorize(Roles = "OMB_ALL")]
        public ActionResult<string> GetRestricted()
        {
            return JsonConvert.SerializeObject(User as ModPrincipal);
        }

        [HttpGet]
        [Route("signout")]
        public new IActionResult SignOut()
        {
            HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            HttpContext.SignOutAsync(WsFederationDefaults.AuthenticationScheme, new AuthenticationProperties());
            return Ok(); // maybe redirect to somewhere useful here
        }
    }
}
