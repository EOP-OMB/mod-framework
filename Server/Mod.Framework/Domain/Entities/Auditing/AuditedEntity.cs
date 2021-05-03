using System;

namespace Mod.Framework.Domain.Entities.Auditing
{
    /// <summary>
    /// A shortcut of <see cref="AuditedEntity{TPrimaryKey}"/> for most used primary key type (<see cref="int"/>).
    /// </summary>
    [Serializable]
    public abstract class AuditedEntity : AuditedEntity<int>, IEntity
    {

    }

    /// <summary>
    /// This class can be used to simplify implementing <see cref="IAuditedEntity"/>.
    /// </summary>
    /// <typeparam name="TPrimaryKey">Type of the primary key of the entity</typeparam>
    [Serializable]
    public abstract class AuditedEntity<TPrimaryKey> : Entity<TPrimaryKey>, IAuditedEntity
    {
        /// <summary>
        /// Reference to the creator user of this entity.
        /// </summary>
        public virtual string CreatedBy { get; set; }

        /// <summary>
        /// Reference to the last modifier user of this entity.
        /// </summary>
        public virtual string ModifiedBy { get; set; }

        /// <summary>
        /// Last modification date of this entity.
        /// </summary>
        public virtual DateTime ModifiedTime { get; set; }

        /// <summary>
        /// Last modifier user of this entity.
        /// </summary>
        public virtual DateTime CreatedTime { get; set; }
    }
}