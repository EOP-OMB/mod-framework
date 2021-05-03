using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Mod.Framework.Domain.Entities;
using Mod.Framework.Domain.Entities.Auditing;
using Mod.Framework.Domain.Exceptions;
using Mod.Framework.Domain.Repositories;
using Mod.Framework.Extensions;
using Mod.Framework.EfCore.Extensions;
using Mod.Framework.Linq.Expressions;
using Mod.Framework.Runtime.Session;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;

namespace Mod.Framework.EfCore
{
    public class ModDbContext<TDbContext> : DbContext where TDbContext : DbContext
    {
        /// <summary>
        /// Used to get current session values.
        /// </summary>
        public IModSession ModSession { get; set; }

        /// <summary>
        /// Reference to the logger.
        /// </summary>
        public ILogger Logger { get; set; }

        /// <summary>
        /// Can be used to suppress automatically setting TenantId on SaveChanges.
        /// Default: false.
        /// </summary>
        public virtual bool SuppressAutoSetTenantId { get; set; }

        protected virtual bool IsSoftDeleteEnabled { get; private set; } = true;

        public void DisableSoftDelete()
        {
            this.IsSoftDeleteEnabled = false;
        }

        private static readonly MethodInfo ConfigureGlobalFiltersMethodInfo = typeof(TDbContext).GetMethod(nameof(ConfigureGlobalFilters), BindingFlags.Instance | BindingFlags.NonPublic);

        protected ModDbContext(DbContextOptions<TDbContext> options)
            : base(options)
        {
            InitializeDbContext();
        }

        private void InitializeDbContext()
        {
            SetNullsForInjectedProperties();
        }

        private void SetNullsForInjectedProperties()
        {
            Logger = NullLogger.Instance;
            ModSession = NullModSession.Instance;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //if (!optionsBuilder.IsConfigured) ConfigOptions(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                ConfigureGlobalFiltersMethodInfo
                    .MakeGenericMethod(entityType.ClrType)
                    .Invoke(this, new object[] { modelBuilder, entityType });
            }

            //This will singularize all table names
            foreach (IMutableEntityType entityType in modelBuilder.Model.GetEntityTypes())
            {
                entityType.SetTableName(entityType.DisplayName());
            }
        }

        protected void ConfigureGlobalFilters<TEntity>(ModelBuilder modelBuilder, IMutableEntityType entityType)
            where TEntity : class
        {
            if (entityType.BaseType == null && ShouldFilterEntity<TEntity>(entityType))
            {
                var filterExpression = CreateFilterExpression<TEntity>();
                if (filterExpression != null)
                {
                    modelBuilder.Entity<TEntity>().HasQueryFilter(filterExpression);
                }
            }
        }

        protected virtual bool ShouldFilterEntity<TEntity>(IMutableEntityType entityType) where TEntity : class
        {
            if (typeof(ISoftDelete).IsAssignableFrom(typeof(TEntity)))
            {
                return true;
            }

            return false;
        }

        protected virtual Expression<Func<TEntity, bool>> CreateFilterExpression<TEntity>()
            where TEntity : class
        {
            Expression<Func<TEntity, bool>> expression = null;

            if (typeof(ISoftDelete).IsAssignableFrom(typeof(TEntity)))
            {
                expression = e => !IsSoftDeleteEnabled || !((ISoftDelete)e).IsDeleted;
            }

            return expression;
        }

        public override int SaveChanges()
        {
            try
            {
                ApplyConcepts();
                var result = base.SaveChanges();
                return result;
            }
            catch (DbUpdateConcurrencyException ex)
            {
                throw new ModDbConcurrencyException(ex.Message, ex);
            }
        }

        protected virtual void ApplyConcepts()
        {
            var userId = GetAuditUserId();

            foreach (var entry in ChangeTracker.Entries().ToList())
            {
                if (entry.State != EntityState.Modified && entry.CheckOwnedEntityChange())
                {
                    Entry(entry.Entity).State = EntityState.Modified;
                }

                ApplyConcepts(entry, userId);
            }
        }

        protected virtual void ApplyConcepts(EntityEntry entry, string userId)
        {
            switch (entry.State)
            {
                case EntityState.Added:
                    ApplyConceptsForAddedEntry(entry, userId);
                    break;
                case EntityState.Modified:
                    ApplyConceptsForModifiedEntity(entry, userId);
                    break;
                case EntityState.Deleted:
                    ApplyConceptsForDeletedEntity(entry, userId);
                    break;
            }
        }

        protected virtual void ApplyConceptsForAddedEntry(EntityEntry entry, string userId)
        {
            CheckAndSetId(entry);
            SetCreationAuditProperties(entry.Entity, userId);
        }

        protected virtual void ApplyConceptsForModifiedEntity(EntityEntry entry, string userId)
        {
            SetModificationAuditProperties(entry.Entity, userId);
            if (entry.Entity is ISoftDelete && entry.Entity.As<ISoftDelete>().IsDeleted)
            {
                SetDeletionAuditProperties(entry.Entity, userId);
            }
        }

        protected virtual void ApplyConceptsForDeletedEntity(EntityEntry entry, string userId)
        {
            if (IsHardDeleteEntity(entry))
            {
                return;
            }

            CancelDeletionForSoftDelete(entry);
            SetDeletionAuditProperties(entry.Entity, userId);
        }

        protected virtual bool IsHardDeleteEntity(EntityEntry entry)
        {
            return !(entry.Entity is ISoftDelete);
        }

        protected virtual void CheckAndSetId(EntityEntry entry)
        {
            //Set GUID Ids
            if (entry.Entity is IEntity<Guid> entity && entity.Id == Guid.Empty)
            {
                var idPropertyEntry = entry.Property("Id");

                if (idPropertyEntry != null && idPropertyEntry.Metadata.ValueGenerated == ValueGenerated.Never)
                {
                    entity.Id = Guid.NewGuid();
                }
            }
        }

        protected virtual void SetCreationAuditProperties(object entityAsObj, string userId)
        {
            EntityAuditingHelper.SetCreationAuditProperties(entityAsObj, userId);
        }

        protected virtual void SetModificationAuditProperties(object entityAsObj, string userId)
        {
            EntityAuditingHelper.SetModificationAuditProperties(entityAsObj, userId);
        }

        protected virtual void CancelDeletionForSoftDelete(EntityEntry entry)
        {
            if (!(entry.Entity is ISoftDelete))
            {
                return;
            }

            entry.Reload();
            entry.State = EntityState.Modified;
            entry.Entity.As<ISoftDelete>().IsDeleted = true;
        }

        protected virtual void SetDeletionAuditProperties(object entityAsObj, string userId)
        {
            EntityAuditingHelper.SetDeletionAuditProperties(entityAsObj, userId);
        }

        protected virtual string GetAuditUserId()
        {
            if (!string.IsNullOrEmpty(ModSession.UserId))
            {
                return ModSession.UserId;
            }

            return null;
        }

        protected virtual Expression<Func<T, bool>> CombineExpressions<T>(Expression<Func<T, bool>> expression1, Expression<Func<T, bool>> expression2)
        {
            return ExpressionCombiner.Combine(expression1, expression2);
        }

    }
}
