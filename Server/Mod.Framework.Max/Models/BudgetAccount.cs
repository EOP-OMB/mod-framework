using Mod.Framework.Max.WebDataServices;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Max.Models
{
    public class BudgetAccount
    {
        public string MaxAgencyId { get; set; }
        public string MaxBureauId { get; set; }
        public string MaxAccountId { get; set; }
        public string Name { get; set; }
        public string ExaminerSamAccountName { get; set; }

        public string ExternalId { get
            {
                return this.MaxAgencyId + "|" + this.MaxBureauId + "|" + this.MaxAccountId;
            } 
        }

        public BudgetAccount(VPMA330B_FILTERED_ACCT_LIST ba)
        {
            this.MaxAgencyId = ba.AGEUP.ToUpper().Trim();
            this.MaxBureauId = ba.BURUP.ToUpper().Trim();
            this.MaxAccountId = ba.ACCT.ToUpper().Trim();
            this.Name = ba.ACCTLT;
            this.ExaminerSamAccountName = ba.EXAMID;
        }
    }
}
