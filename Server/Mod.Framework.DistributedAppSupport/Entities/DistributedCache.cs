using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mod.Framework.DistributedAppSupport.Entities
{
    /// <summary>
    /// Provides the storage of one element in a .net core distribute cache.
    /// 
    /// See https://docs.microsoft.com/en-us/aspnet/core/performance/caching/distributed?view=aspnetcore-3.0
    /// This is the equivalent of "dotnet sql-cache create" but done as an EF code-first implementation.
    /// </summary>
    [Table("DistributedCache")]
    public class DistributedCache
    {
        [Key, StringLength(449)]
        public string Id { get; set; }
        [MaxLength]
        public byte[] Value { get; set; }
        public DateTimeOffset ExpiresAtTime { get; set; }
        public long? SlidingExpirationInSeconds { get; set; }
        public DateTimeOffset? AbsoluteExpiration { get; set; }
    }
}
