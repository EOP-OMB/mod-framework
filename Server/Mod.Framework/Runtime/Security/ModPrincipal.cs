using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Security.Claims;
using System.Linq;
using System.ComponentModel;
using System.Dynamic;

namespace Mod.Framework.Runtime.Security
{
    /// <summary>
    /// Implements an identity based on an ADFS relying party trust.  The trust is expected to provide these (schema qualified) attributes:
    /// UPN, emailaddress, givenname, surname, title, telephonenumber and role.  The UPN claim is used as the unique ID.
    /// </summary>
    [Serializable]
    public class ModPrincipal : ClaimsPrincipal, IModPrincipal, ISerializable
    {
        #region Properties
        public string UserId { get; private set; }
        public string Upn { get; private set; }
        public string EmailAddress { get; private set; }
        public string FirstName { get; private set; }
        public string LastName { get; private set; }
        public string Title { get; private set; }
        public string PhoneNumber { get; private set; }
        public string DisplayName { get; private set; }
        public IEnumerable<string> Groups { get; private set; }
        public IEnumerable<string> Roles { get; set; }
        #endregion

        public ModPrincipal()
        {

        }

        public ModPrincipal(ClaimsPrincipal principal, bool throwOnError = true) : this()
        {
            // ignore the case where the user isn't authenticated, if so requested
            if (!throwOnError && (principal.Identity == null || !principal.Identity.IsAuthenticated)) return;

            if (principal.Identity == null || !principal.Identity.IsAuthenticated)
            {
                throw new UnauthorizedAccessException("Not authenticated");
            }

            var claimsId = new ClaimsIdentity(principal.Claims, principal.Identity.AuthenticationType, ModClaimTypes.Upn, ModClaimTypes.Role);
            this.AddIdentity(claimsId);

            UserId = TryClaim(claimsId.Claims, ModClaimTypes.UserId);
            Upn = TryClaim(claimsId.Claims, ModClaimTypes.Upn);
            Upn = Upn.Trim().ToLower();

            EmailAddress = TryClaim(claimsId.Claims, ModClaimTypes.EmailAddress);
            FirstName = TryClaim(claimsId.Claims, ModClaimTypes.GivenName);
            LastName = TryClaim(claimsId.Claims, ModClaimTypes.Surname);
            Title = TryClaim(claimsId.Claims, ModClaimTypes.Title);
            Title = Title.Trim();

            PhoneNumber = TryClaim(claimsId.Claims, ModClaimTypes.PhoneNumber);
            Groups = claimsId.Claims.Where(x => x.Type == ModClaimTypes.Role).Select(x => x.Value).ToList();
            DisplayName = TryClaim(claimsId.Claims, ModClaimTypes.Name);

            if(string.IsNullOrEmpty(UserId))
            {
                UserId = Upn;
            }
        }

        public override bool IsInRole(string role)
        {
            return Roles.Contains(role);
        }

        public bool IsInRole(string[] roles)
        {
            var isInRole = false;

            foreach (string role in roles)
            {
                isInRole = isInRole || IsInRole(role);
            }

            return isInRole;
        }

        #region ISerializable Implementation

        // this is tedious, but allows us to send the full user id package to 
        // the client side, even though ClaimsIdentity isn't serializable

        public ModPrincipal(SerializationInfo info, StreamingContext context)
        {
            // don't care about deserialization
            throw new NotImplementedException();
        }


        /// <summary>
        /// Add the pieces needed to serialize, applying camel casing
        /// </summary>
        /// <param name="info"></param>
        /// <param name="context"></param>
        public new void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            info.AddValue("upn", Upn, typeof(string));
            info.AddValue("emailAddress", EmailAddress, typeof(string));
            info.AddValue("firstName", FirstName, typeof(string));
            info.AddValue("lastName", LastName, typeof(string));
            info.AddValue("title", Title, typeof(string));
            info.AddValue("phoneNumber", PhoneNumber, typeof(string));
            info.AddValue("groups", Groups.ToArray(), typeof(string[]));
            info.AddValue("displayName", DisplayName, typeof(string));
            info.AddValue("roles", Roles.ToArray(), typeof(string[]));
        }
        #endregion

        #region Private Helpers
        private string TryClaim(IEnumerable<Claim> claims, string claimType)
        {
            var c = claims.FirstOrDefault(x => x.Type == claimType);
            return (c == null ? string.Empty : c.Value);
        }
        #endregion
    }
}
