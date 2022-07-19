using Microsoft.AspNetCore.DataProtection.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;

namespace Mod.Framework.DistributedAppSupport
{
    /// <summary>
    /// Provides a SQL Server-based implementation of IXmlRepository, for use with data protection (i.e., machinekey) in a distributed environment.
    /// It is assumed that each app has its own instance of this; this implementation doesn't do app isolation on its own.
    /// </summary>
    class DistributedSqlKeyStore : IXmlRepository
    {
        string ConnectionString { get; set; }

        public DistributedSqlKeyStore(string connectionString)
        {
            ConnectionString = connectionString;
        }

        public IReadOnlyCollection<XElement> GetAllElements()
        {
            using (var dc = new DistributedAppSupportContext(ConnectionString))
            {
                var result = dc.DataProtection.Select(x => XElement.Parse(x.Xml)).ToArray();
                return result;
            }
        }

        public void StoreElement(XElement element, string friendlyName)
        {
            using (var dc = new DistributedAppSupportContext(ConnectionString))
            {
                var item = dc.DataProtection.Where(x => x.FriendlyName == friendlyName).FirstOrDefault();
                if (item == null)
                {
                    item = new Entities.DataProtection() { FriendlyName = friendlyName };
                    dc.DataProtection.Add(item);
                }
                item.Xml = element.ToString();
                dc.SaveChanges();
            }
        }
    }
}
