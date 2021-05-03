using System;

namespace Mod.Framework.Domain.Entities.Auditing
{
    /// <summary>
    /// This interface is implemented by entities that is wanted to store modification information (who and when modified lastly).
    /// Properties are automatically set when updating the <see cref="IEntity"/>.
    /// </summary>
    public interface IModificationAudited
    {
        /// <summary>
        /// Last modifier user for this entity.
        /// </summary>
        string ModifiedBy { get; set; }

        DateTime ModifiedTime { get; set; }
    }
}