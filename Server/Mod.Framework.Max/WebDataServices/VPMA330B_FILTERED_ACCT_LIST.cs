using System.Collections.Generic;
using System.Data.Services.Client;
using System.Linq;

namespace Mod.Framework.Max.WebDataServices
{
    public partial class VPMA330B_FILTERED_ACCT_LIST
    {
        public VPMA330B_FILTERED_ACCT_LIST()
        {

        }

        public VPMA330B_FILTERED_ACCT_LIST(VPMA330B_FILTERED_ACCT_LIST ba)
        {
            
            this.ACCT = ba.ACCT.Trim();
            this.ACCTLT = ba.ACCTLT.Trim();
            this.ACCTSEQ = ba.ACCTSEQ.Trim();
            this.AGEUP = ba.AGEUP.Trim();
            this.BURUP = ba.BURUP.Trim();
            this.EXAMID = ba.EXAMID.Trim();
            this.OMBDIVUP = ba.OMBDIVUP.Trim();
        }

        public static List<VPMA330B_FILTERED_ACCT_LIST> GetAll(BudgetAccountDataEntities svc)
        {
            //try
            //{
                var query = svc.VPMA330B_FILTERED_ACCT_LIST as DataServiceQuery<VPMA330B_FILTERED_ACCT_LIST>;

                var raw = Helpers<VPMA330B_FILTERED_ACCT_LIST>.Enumerate(query);

                return raw.Select(ba => new VPMA330B_FILTERED_ACCT_LIST(ba)).ToList();
            //}
            //catch
            //{
            //    return new List<VPMA330B_FILTERED_ACCT_LIST>();
            //}
        }
    }
}
