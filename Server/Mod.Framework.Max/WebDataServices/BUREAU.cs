using System.Collections.Generic;
using System.Data.Services.Client;
using System.Linq;

namespace Mod.Framework.Max.WebDataServices
{
    public partial class BUREAU
    {
        public BUREAU()
        {

        }

        public BUREAU(BUREAU bur)
        {
            this.ORG_BUREAU = bur.ORG_BUREAU.Trim();
            this.BURAI = bur.BURAI.Trim();
            this.BURST = bur.BURST.Trim();
            this.BURTL = bur.BURTL.Trim();
            this.BURLT = bur.BURLT.Trim();
            this.BURABRV = bur.BURABRV.Trim();
            this.ORG_AGENCY = bur.ORG_AGENCY.Trim();
            this.BURSEQ = bur.BURSEQ.Trim();
        }

        public static List<BUREAU> GetAll(MaxUserAndGroupEntities svc, bool includeAgencies = false)
        {
            //try
            //{
                var query = svc.BUREAUS
                    .Where(x => x.BURAI == "A" && (includeAgencies || (x.ORG_BUREAU != "00" && x.ORG_BUREAU != "XX"))) as DataServiceQuery<BUREAU>;

                var raw = Helpers<BUREAU>.Enumerate(query);

                return raw.Select(ag => new BUREAU(ag)).ToList();
            //}
            //catch
            //{
            //    return new List<BUREAU>();
            //}
        }
    }
}
