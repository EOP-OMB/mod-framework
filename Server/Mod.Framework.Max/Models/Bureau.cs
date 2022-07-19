using Mod.Framework.Max.WebDataServices;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Max.Models
{
    public class Bureau
    {
        public string MaxBureauId { get; set; }         // ORG_Bureau

        public bool Inactive { get; set; }              // BURAI == 'A' | 'I', A=Active, I=Inactive

        public string ShortName { get; set; }    // BURST

        public string LongName { get; set; }         // BURTL

        public string FullName { get; set; }     // BURLT

        public string Abbreviation { get; set; }  // BURABRV

        public string MaxAgencyId { get; set; }

        public Bureau(BUREAU bur)
        {
            this.MaxBureauId = bur.ORG_BUREAU;
            this.Inactive = bur.BURAI == "I";
            this.ShortName = bur.BURST;
            this.LongName = bur.BURTL;
            this.FullName = bur.BURLT;
            this.Abbreviation = bur.BURABRV;
            this.MaxAgencyId = bur.ORG_AGENCY;
        }
    }
}
