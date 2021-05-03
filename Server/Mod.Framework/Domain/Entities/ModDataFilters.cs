using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Domain.Entities
{
    /// <summary>
    /// Standard filters of MOD.
    /// </summary>
    public static class ModDataFilters
    {
        /// <summary>
        /// "SoftDelete".
        /// Soft delete filter.
        /// Prevents getting deleted data from database.
        /// See <see cref="ISoftDelete"/> interface.
        /// </summary>
        public const string SoftDelete = "SoftDelete";

        /// <summary>
        /// Standard parameters of ABP.
        /// </summary>
        public static class Parameters
        {
            /// <summary>
            /// "isDeleted".
            /// </summary>
            public const string IsDeleted = "isDeleted";
        }
    }
}
