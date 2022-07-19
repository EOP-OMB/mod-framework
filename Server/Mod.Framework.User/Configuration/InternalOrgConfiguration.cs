using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mod.Framework.User.Entities;

namespace Mod.PortfolioManager.Infrastructure.EfCore.Configurations
{
    public class InternalOrgConfiguration : IEntityTypeConfiguration<InternalOrg>
    {
        public void Configure(EntityTypeBuilder<InternalOrg> builder)
        {
            SeedData(builder);
        }
        private void SeedData(EntityTypeBuilder<InternalOrg> builder)
        {
            //builder.HasData(new InternalOrg() { Id = 1, Code = "OMB0103020100", Division = "Budget Analysis and Systems Division", Branch = "Budget Review Branch" });
            //builder.HasData(new InternalOrg() { Id = 2, Code = "OMB0305000000", Division = "Health Division", Branch = "AD" });
            //builder.HasData(new InternalOrg() { Id = 3, Code = "OMB0107000000", Division = "Legislative Affairs", Branch = "" });
            //builder.HasData(new InternalOrg() { Id = 4, Code = "OMB0101000000", Division = "Director's Office", Branch = "" });
            //builder.HasData(new InternalOrg() { Id = 5, Code = "OMB0201000000", Division = "Office of Federal Financial Management", Branch = "" });
            //builder.HasData(new InternalOrg() { Id = 6, Code = "OMB0304000000", Division = "Education, Income Maintenance and Labor Division", Branch = "AD" });
            //builder.HasData(new InternalOrg() { Id = 7, Code = "OMB0303020000", Division = "National Security Division", Branch = "" });
            //builder.HasData(new InternalOrg() { Id = 8, Code = "OMB0401000000", Division = "", Branch = "Central fund" });
            //builder.HasData(new InternalOrg() { Id = 9, Code = "OMB0304010000", Division = "Education, Income Maintenance and Labor Division", Branch = "Income Maintenance Branch" });
            //builder.HasData(new InternalOrg() { Id = 10, Code = "OMB0301000000", Division = "Energy/Science/Water Division", Branch = "AD" });
            //builder.HasData(new InternalOrg() { Id = 11, Code = "OMB0109000000", Division = "Performance and Personnel Management", Branch = "" });
            //builder.HasData(new InternalOrg() { Id = 12, Code = "OMB0303010000", Division = "International Affairs Division", Branch = "State Branch" });
            //builder.HasData(new InternalOrg() { Id = 13, Code = "OMB0104000000", Division = "Communications", Branch = "" });
            //builder.HasData(new InternalOrg() { Id = 14, Code = "OMB0305010000", Division = "Health Division", Branch = "" });
            //builder.HasData(new InternalOrg() { Id = 15, Code = "OMB0202000000", Division = "Office of Federal Procurement Policy", Branch = "" });
            //builder.HasData(new InternalOrg() { Id = 16, Code = "OMB0108000000", Division = "Legislative Reference Division", Branch = "" });
            //builder.HasData(new InternalOrg() { Id = 17, Code = "OMB0106000000", Division = "General Counsel", Branch = "" });
            //builder.HasData(new InternalOrg() { Id = 18, Code = "OMB0203000000", Division = "Office of Information and Regulatory Affairs", Branch = "" });
            //builder.HasData(new InternalOrg() { Id = 19, Code = "OMB0103010100", Division = "Budget Analysis and Systems Division", Branch = "Budget Analysis Branch" });
            //builder.HasData(new InternalOrg() { Id = 20, Code = "OMB0105000000", Division = "Economic Policy", Branch = "" });
            //builder.HasData(new InternalOrg() { Id = 21, Code = "SPE0400000000", Division = "Office of the Federal Chief Information Officer", Branch = "U.S.Digital Service" });
            //builder.HasData(new InternalOrg() { Id = 22, Code = "OMB0502000000", Division = "", Branch = "MAPS" });
            //builder.HasData(new InternalOrg() { Id = 23, Code = "OMB0103020200", Division = "Budget Analysis and Systems Division", Branch = "Budget Concepts Branch" });
            //builder.HasData(new InternalOrg() { Id = 24, Code = "OMB0301020000", Division = "Natural Resources Division", Branch = "Interior Branch" });
            //builder.HasData(new InternalOrg() { Id = 25, Code = "OMB0501000000", Division = "", Branch = "MAX Budget Systems" });
            //builder.HasData(new InternalOrg() { Id = 26, Code = "OMB0302010000", Division = "Transportation/Homeland Security/Justice Division", Branch = "Transportation/GSA Branch" });
            //builder.HasData(new InternalOrg() { Id = 27, Code = "OMB0302020000", Division = "Housing/Treasury/Commerce Division", Branch = "Housing Branch" });
            //builder.HasData(new InternalOrg() { Id = 28, Code = "OMB0103010200", Division = "Budget Analysis and Systems Division", Branch = "Budget Systems Branch" });
            //builder.HasData(new InternalOrg() { Id = 29, Code = "OMB0503000000", Division = "", Branch = "Central Fund Information Technology" });
            //builder.HasData(new InternalOrg() { Id = 30, Code = "OMB0301010000", Division = "Energy/Science/Water Division", Branch = "Energy Branch" });
            //builder.HasData(new InternalOrg() { Id = 31, Code = "OMB0303000000", Division = "International Affairs Division", Branch = "AD" });
            //builder.HasData(new InternalOrg() { Id = 32, Code = "OMB0302000000", Division = "Associate Director", Branch = "General Government Program" });
            //builder.HasData(new InternalOrg() { Id = 33, Code = "OMB0102000000", Division = "Management and Operations Division", Branch = "" });

            builder.HasData(new InternalOrg() { Id = 1, Abbreviation = "MOD", Description = "Management and Operations Division", Code = "OMB0102000000" });
            builder.HasData(new InternalOrg() { Id = 2, Abbreviation = "DO", Description = "Directors Office", Code = "OMB0101000000" });
            builder.HasData(new InternalOrg() { Id = 3, Abbreviation = "BRD", Description = "Associate Director, Budget Review Division", Code = "OMB0103000000" });
            builder.HasData(new InternalOrg() { Id = 4, Abbreviation = "BAB", Description = "Budget Analysis Branch", Code = "OMB0103010100" });
            builder.HasData(new InternalOrg() { Id = 5, Abbreviation = "BRB", Description = "Budget Review Branch", Code = "OMB0103020100" });
            builder.HasData(new InternalOrg() { Id = 6, Abbreviation = "BSB", Description = "Budget Systems Branch", Code = "OMB0103010200" });
            builder.HasData(new InternalOrg() { Id = 7, Abbreviation = "COMM", Description = "Communications", Code = "OMB0104000000" });
            builder.HasData(new InternalOrg() { Id = 8, Abbreviation = "EP", Description = "Economic Policy", Code = "OMB0105000000" });
            builder.HasData(new InternalOrg() { Id = 9, Abbreviation = "GC", Description = "General Counsel", Code = "OMB0106000000" });
            builder.HasData(new InternalOrg() { Id = 10, Abbreviation = "LA", Description = "Legislative Affairs", Code = "OMB0107000000" });
            builder.HasData(new InternalOrg() { Id = 11, Abbreviation = "LRD", Description = "Legislative Reference Division", Code = "OMB0108000000" });
            builder.HasData(new InternalOrg() { Id = 12, Abbreviation = "NSP", Description = "Associate Director, National Security Program", Code = "OMB0303000000" });
            builder.HasData(new InternalOrg() { Id = 13, Abbreviation = "IAD", Description = "International Affairs Division", Code = "OMB0303010000" });
            builder.HasData(new InternalOrg() { Id = 14, Abbreviation = "NSD", Description = "National Security Division", Code = "OMB0303020000" });
            builder.HasData(new InternalOrg() { Id = 16, Abbreviation = "GGP", Description = "Housing, Treasury, and Commerce Division", Code = "OMB0302010000" });
            builder.HasData(new InternalOrg() { Id = 18, Abbreviation = "ESW", Description = "Energy/Science/Water Division", Code = "OMB0301010000" });
            builder.HasData(new InternalOrg() { Id = 19, Abbreviation = "NRD", Description = "Natural Resources Division", Code = "OMB0301020000" });
            builder.HasData(new InternalOrg() { Id = 20, Abbreviation = "EIML", Description = "Education, Income Maintenance, and Labor - Assoc Dir", Code = "OMB0304000000" });
            builder.HasData(new InternalOrg() { Id = 21, Abbreviation = "EIML", Description = "Education, Income Maintenance, and Labor Division", Code = "OMB0304010000" });
            builder.HasData(new InternalOrg() { Id = 22, Abbreviation = "OFFM", Description = "Office of Federal Financial Management", Code = "OMB0201000000" });
            builder.HasData(new InternalOrg() { Id = 23, Abbreviation = "OFPP", Description = "Office of Federal Procurement Policy", Code = "OMB0202000000" });
            builder.HasData(new InternalOrg() { Id = 24, Abbreviation = "OIRA", Description = "Office of Information and Regulatory Affairs", Code = "OMB0203000000" });
            builder.HasData(new InternalOrg() { Id = 29, Abbreviation = "ITOR", Description = "ITOR-USDS", Code = "SPE0400000000" });
            builder.HasData(new InternalOrg() { Id = 30, Abbreviation = "BCB", Description = "Budget Concepts Branch", Code = "OMB0103020200" });
            builder.HasData(new InternalOrg() { Id = 31, Abbreviation = "PPM", Description = "Performance and Personnel Management", Code = "OMB0109000000" });
            builder.HasData(new InternalOrg() { Id = 32, Abbreviation = "GGP", Description = "Transportation, Homeland, Justice, and Services Division", Code = "OMB0302020000" });
            builder.HasData(new InternalOrg() { Id = 33, Abbreviation = "HEALTH", Description = "Health Programs - Associate Director", Code = "OMB0305000000" });
            builder.HasData(new InternalOrg() { Id = 34, Abbreviation = "HEALTH", Description = "Health Division", Code = "OMB0305010000" });

            // Unsure of map
            builder.HasData(new InternalOrg() { Id = 15, Abbreviation = "GGP", Description = "Associate Director, General Government Program", Code = "OMB0302000000" });
            builder.HasData(new InternalOrg() { Id = 17, Abbreviation = "NRP", Description = "Associate Director, Natural Resource Program", Code = "OMB0301000000" });

            // Non-Departments
            builder.HasData(new InternalOrg() { Id = 25, Abbreviation = "CA", Description = "Central Fund", Code = "OMB0401000000" });
            builder.HasData(new InternalOrg() { Id = 26, Abbreviation = "BSB", Description = "MAX Budget Systems", Code = "OMB0501000000" });
            builder.HasData(new InternalOrg() { Id = 27, Abbreviation = "BSB", Description = "Modeling, Analysis, Photocomposition Systems", Code = "OMB0502000000" });
            builder.HasData(new InternalOrg() { Id = 28, Abbreviation = "IPEC", Description = "Intellectual Property Enforcement Coordinator", Code = "OMB0101010000" });

            // No ITOR Departments except USDS in Portfolio Manager
            builder.HasData(new InternalOrg() { Id = 35, Abbreviation = "ITOR", Description = "ITOR-CIO", Code = "SPE0501000000" });
            builder.HasData(new InternalOrg() { Id = 36, Abbreviation = "ITOR", Description = "ITOR-E-Gov DAD", Code = "SPE0502000000" });
            builder.HasData(new InternalOrg() { Id = 37, Abbreviation = "ITOR", Description = "ITOR-Cyber Security", Code = "SPE0503000000" });
            builder.HasData(new InternalOrg() { Id = 38, Abbreviation = "ITOR", Description = "ITOR-Policy-Budget-Comms", Code = "SPE0504000000" });
            builder.HasData(new InternalOrg() { Id = 39, Abbreviation = "ITOR", Description = "ITOR-Oversight and Analytics", Code = "SPE0505000000" });
            builder.HasData(new InternalOrg() { Id = 40, Abbreviation = "ITOR", Description = "ITOR-General Counsel", Code = "SPE0506000000" });
            builder.HasData(new InternalOrg() { Id = 41, Abbreviation = "ITOR", Description = "ITOR-Admin Services", Code = "SPE0507000000" });
            builder.HasData(new InternalOrg() { Id = 42, Abbreviation = "ITOR", Description = "ITOR-Procurement", Code = "SPE0508000000" });
            builder.HasData(new InternalOrg() { Id = 43, Abbreviation = "DDI", Description = "DDI Account Fund", Code = "SPE0300000000" });

            // Commented out in Departments
            builder.HasData(new InternalOrg() { Id = 44, Abbreviation = "OIT", Description = "Office of Information Technology", Code = "OMB0503000000" });
            builder.HasData(new InternalOrg() { Id = 45, Abbreviation = "OSS", Description = "Office of Support Services", Code = "OMB0401000000" });
            builder.HasData(new InternalOrg() { Id = 46, Abbreviation = "OBFT", Description = "Office of Budget, Financial and Travel Management", Code = "OMB0401000000" });


        }
    }
}
