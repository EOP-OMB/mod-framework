using System.Collections.Generic;
using System.Data.Services.Client;
using System.Linq;

namespace Mod.Framework.Max.WebDataServices
{
    public partial class AGENCY
    {
        public AGENCY()
        {

        }

        public AGENCY(AGENCY ag)
        {
            this.ORG_AGENCY = ag.ORG_AGENCY.Trim();
            this.AGEAI =ag.AGEAI.Trim();
            this.AGEST = ag.AGEST.Trim();
            this.AGETL = ag.AGETL.Trim();
            this.AGELT = ag.AGELT.Trim();
            this.AGEABRV = ag.AGEABRV.Trim();
        }

        public static List<AGENCY> GetAll(MaxUserAndGroupEntities svc)
        {
            //try
            //{
                var query = svc.AGENCIES
                    .Where(x => x.AGEAI == "A") as DataServiceQuery<AGENCY>;

                var raw = Helpers<AGENCY>.Enumerate(query);

                return raw.Select(ag => new AGENCY(ag)).ToList();
            //}
            //catch
            //{
            //    return new List<AGENCY>();
            //}
        }
    }
}
