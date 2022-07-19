using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mod.Framework.DistributedAppSupport.Options
{
    /// <summary>
    /// Describes options for a distributed cache ticket store.
    /// </summary>
    public class DistributedCacheTicketStoreOptions
    {
        public int TimeoutMinutes { get; set; }
    }
}
