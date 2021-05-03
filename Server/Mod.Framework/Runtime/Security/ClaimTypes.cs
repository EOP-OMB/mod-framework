using System.Security.Claims;

namespace Mod.Framework.Runtime.Security
{
    public class ModClaimTypes
    {
        /// <summary>
        /// UserId.
        /// Default: <see cref="ClaimTypes.Name"/>
        /// </summary>
        public static string Name { get; set; } = ClaimTypes.Name;

        /// <summary>
        /// UserId.
        /// Default: <see cref="ClaimTypes.NameIdentifier"/>
        /// </summary>
        public static string UserId { get; set; } = ClaimTypes.NameIdentifier;

        /// <summary>
        /// UserId.
        /// Default: <see cref="ClaimTypes.Role"/>
        /// </summary>
        public static string Role { get; set; } = ClaimTypes.Role;

        /// <summary>
        /// ImpersonatorUserId.
        /// Default: ??
        /// </summary>
        public static string ImpersonatorUserId { get; set; } = "??";

        /// <summary>
        /// Upn.
        /// Default: <see cref="ClaimTypes.Upn"/>
        /// </summary>
        public static string Upn { get; set; } = ClaimTypes.Upn;

        /// <summary>
        /// EmailAddress.
        /// Default: <see cref="ClaimTypes.Email"/>
        /// </summary>
        public static string EmailAddress { get; set; } = ClaimTypes.Email;

        /// <summary>
        /// GivenName.
        /// Default: <see cref="ClaimTypes.GivenName"/>
        /// </summary>
        public static string GivenName { get; set; } = ClaimTypes.GivenName;

        /// <summary>
        /// Surname.
        /// Default: <see cref="ClaimTypes.Surname"/>
        /// </summary>
        public static string Surname { get; set; } = ClaimTypes.Surname;

        /// <summary>
        /// Title.
        /// Default: http://schemas.microsoft.com/omb/identity/claims/title
        /// </summary>
        public static string Title { get; set; } = "http://schemas.microsoft.com/omb/identity/claims/title";

        /// <summary>
        /// PhoneNumber.
        /// Default: http://schemas.microsoft.com/omb/identity/claims/telephoneNumber
        /// </summary>
        public static string PhoneNumber { get; set; } = "http://schemas.microsoft.com/omb/identity/claims/telephoneNumber";
    }
}
