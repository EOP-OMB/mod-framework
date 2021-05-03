using System;

namespace Mod.Framework.Domain.Entities.Auditing
{
    /// <summary>
    /// This interface is implemented by entities which wanted to store deletion information (who and when deleted).
    /// </summary>
    public interface IDeletionAudited : ISoftDelete
    {
        /// <summary>
        /// Which user deleted this entity?
        /// </summary>
        string DeletedBy { get; set; }

        DateTime? DeletedTime { get; set; }
    }
}