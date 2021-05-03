namespace Mod.Framework.Domain.Entities.Auditing
{
    /// <summary>
    /// This interface ads <see cref="IDeletionAudited"/> to <see cref="IAuditedEntity"/> for a fully audited entity.
    /// </summary>
    public interface IFullAudited : IAuditedEntity, IDeletionAudited
    {
        
    }
}