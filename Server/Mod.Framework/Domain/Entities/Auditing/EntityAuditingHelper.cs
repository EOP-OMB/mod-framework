using Mod.Framework.Extensions;
using System;

namespace Mod.Framework.Domain.Entities.Auditing
{
    public static class EntityAuditingHelper
    {
        public static void SetCreationAuditProperties(
            object entityAsObj,
            string userId)
        {
            if (entityAsObj is ICreationAudited)
            {
                var entity = entityAsObj as ICreationAudited;

                entity.CreatedTime = DateTime.Now;

                if (string.IsNullOrEmpty(userId))
                {
                    // Unknown user, this will cause an exception to be thrown later
                    entity.CreatedBy = null;
                }
                else if (entity.CreatedBy == null)
                {
                    //If it's not already set, set CreatedBy
                    entity.CreatedBy = userId;
                }
            }
        }

        public static void SetModificationAuditProperties(object entityAsObj, string userId)
        {
            if (entityAsObj is IModificationAudited)
            {
                var entity = entityAsObj.As<IModificationAudited>();

                if (userId == null)
                {
                    //Unknown user, this will cause an exception to be thrown later
                    entity.ModifiedBy = null;
                }
                else
                {
                    //set ModifiedBy
                    entity.ModifiedBy = userId;
                }

                entity.ModifiedTime = DateTime.Now;
            }
        }

        public static void SetDeletionAuditProperties(object entityAsObj, string userId)
        {
            if (entityAsObj is IDeletionAudited)
            {
                var entity = entityAsObj.As<IDeletionAudited>();

                if (string.IsNullOrEmpty(entity.DeletedBy))
                {
                    entity.DeletedBy = userId;
                }

                if (entity.DeletedTime == null)
                {
                    entity.DeletedTime = DateTime.Now;
                }
            }
        }
    }
}
