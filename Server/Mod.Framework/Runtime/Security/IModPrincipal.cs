using System;
using System.Collections.Generic;
using System.Security.Principal;
using System.Text;

namespace Mod.Framework.Runtime.Security
{
    public interface IModPrincipal : IPrincipal
    {
        string UserId { get; }
        string Upn { get; }
        string EmailAddress { get; }
        string FirstName { get; }
        string LastName { get; }
        string Title { get; }
        string PhoneNumber { get; }
        string DisplayName { get; }
        IEnumerable<string> Groups { get; }
        bool IsInRole(string[] roles);
    }
}
