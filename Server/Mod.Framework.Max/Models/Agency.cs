using Mod.Framework.Max.WebDataServices;
using System;
using System.Collections.Generic;
using System.Text;

namespace Mod.Framework.Max.Models

{
    public class Agency
    {
        public string MaxAgencyId { get; set; }         // ORG_AGENCY
        
        public bool Inactive { get; set; }              // AGEAI == 'A' | 'I', A=Active, I=Inactive
        
        public string ShortName { get; set; }    // AGEST
        
        public string LongName { get; set; }         // AGETL
        
        public string FullName { get; set; }     // AGELT
        
        public string Abbreviation { get; set; }  // AGEABRV

        public Agency(AGENCY ag)
        {
            this.MaxAgencyId = ag.ORG_AGENCY;
            this.Inactive = ag.ORG_AGENCY == "I";
            this.ShortName = ag.AGEST;
            this.LongName = ag.AGETL;
            this.FullName = ag.AGELT;
            this.Abbreviation = ag.AGEABRV;
        }
    }
}
