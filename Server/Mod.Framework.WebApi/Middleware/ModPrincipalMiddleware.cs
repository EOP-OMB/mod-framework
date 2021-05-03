using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using Mod.Framework.Runtime.Security;
using System.Threading;

namespace Mod.Framework.WebApi.Middleware
{
    public class ModPrincipalMiddleware
    {
        private readonly RequestDelegate _next;
        private IApplicationRoles _appRoles { get; set; }

        public ModPrincipalMiddleware(RequestDelegate next, IApplicationRoles appRoles)
        {
            _next = next;
            _appRoles = appRoles;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var ctx = context as DefaultHttpContext;
            if (ctx.User.Identity.IsAuthenticated && ctx.User is ClaimsPrincipal)
            {
                var modPrincipal = new ModPrincipal(context.User as ClaimsPrincipal);

                modPrincipal.Roles = _appRoles.GetUserRoles(modPrincipal);

                ctx.User = modPrincipal;

                Thread.CurrentPrincipal = ctx.User;
            }
            await _next(context);
        }
    }
}
