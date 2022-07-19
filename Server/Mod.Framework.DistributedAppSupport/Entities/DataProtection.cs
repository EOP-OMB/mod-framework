using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mod.Framework.DistributedAppSupport.Entities
{
    [Table("DataProtection")]
    public class DataProtection
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string FriendlyName { get; set; }
        public string Xml { get; set; }

    }
}
