using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mod.Framework.User.Entities;

namespace Mod.PortfolioManager.Infrastructure.EfCore.Configurations
{
    public class DepartmentMapConfiguration : IEntityTypeConfiguration<DepartmentMap>
    {
        public void Configure(EntityTypeBuilder<DepartmentMap> builder)
        {
            SeedData(builder);
        }

        private void SeedData(EntityTypeBuilder<DepartmentMap> builder)
        {
            builder.HasData(new DepartmentMap() { Id = 1, DepartmentId = 3, Division = "Directors Office", Office = "Deputy Director for Management's Office (DD/M)" });
            builder.HasData(new DepartmentMap() { Id = 2, DepartmentId = 1, Division = "Directors Office", Office = "" });
            builder.HasData(new DepartmentMap() { Id = 3, DepartmentId = 1, Division = "Directors Office", Office = "Intellectual Property Enforcement Coordinators (IPEC) Office" });
            builder.HasData(new DepartmentMap() { Id = 4, DepartmentId = 55, Division = "Education, Income Maintenance and Labor Programs", Office = "Education Branch" });
            builder.HasData(new DepartmentMap() { Id = 5, DepartmentId = 53, Division = "Education, Income Maintenance and Labor Programs", Office = "Office of the Associate Director, EIML" });
            builder.HasData(new DepartmentMap() { Id = 6, DepartmentId = 54, Division = "Education, Income Maintenance and Labor Programs", Office = "Office of the Deputy Associate Director, EIML" });
            builder.HasData(new DepartmentMap() { Id = 7, DepartmentId = 56, Division = "Education, Income Maintenance and Labor Programs", Office = "Income Maintenance Branch" });
            builder.HasData(new DepartmentMap() { Id = 8, DepartmentId = 57, Division = "Education, Income Maintenance and Labor Programs", Office = "Labor Branch" });
            builder.HasData(new DepartmentMap() { Id = 9, DepartmentId = 73, Division = "General Government Programs", Office = "Commerce Branch" });
            builder.HasData(new DepartmentMap() { Id = 10, DepartmentId = 65, Division = "General Government Programs", Office = "Office Of the Associate Director, GGP" });
            builder.HasData(new DepartmentMap() { Id = 11, DepartmentId = 68, Division = "General Government Programs", Office = "Homeland Security Branch" });
            builder.HasData(new DepartmentMap() { Id = 12, DepartmentId = 71, Division = "General Government Programs", Office = "Housing Branch" });
            builder.HasData(new DepartmentMap() { Id = 13, DepartmentId = 70, Division = "General Government Programs", Office = "Housing/Treasury/Commerce Division" });
            builder.HasData(new DepartmentMap() { Id = 14, DepartmentId = 69, Division = "General Government Programs", Office = "Justice Branch" });
            builder.HasData(new DepartmentMap() { Id = 15, DepartmentId = 67, Division = "General Government Programs", Office = "Transportation/GSA Branch" });
            builder.HasData(new DepartmentMap() { Id = 16, DepartmentId = 72, Division = "General Government Programs", Office = "Treasury Branch" });
            builder.HasData(new DepartmentMap() { Id = 17, DepartmentId = 60, Division = "Health Programs", Office = "HHS Branch" });
            builder.HasData(new DepartmentMap() { Id = 18, DepartmentId = 58, Division = "Health Programs", Office = "Office of the Associate Director, Health Division" });
            builder.HasData(new DepartmentMap() { Id = 19, DepartmentId = 59, Division = "Health Programs", Office = "Office of the Deputy Associate Director, Health Division" });
            builder.HasData(new DepartmentMap() { Id = 20, DepartmentId = 64, Division = "Health Programs", Office = "Health Insurance/Data/Analysis Branch" });
            builder.HasData(new DepartmentMap() { Id = 21, DepartmentId = 61, Division = "Health Programs", Office = "Medicaid Branch" });
            builder.HasData(new DepartmentMap() { Id = 22, DepartmentId = 62, Division = "Health Programs", Office = "Medicare Branch" });
            builder.HasData(new DepartmentMap() { Id = 23, DepartmentId = 63, Division = "Health Programs", Office = "Public Health Branch" });
            builder.HasData(new DepartmentMap() { Id = 24, DepartmentId = 31, Division = "Information Tech & E-govt U", Office = " " });
            builder.HasData(new DepartmentMap() { Id = 25, DepartmentId = 31, Division = "ITOR/Admin Services", Office = "" });
            builder.HasData(new DepartmentMap() { Id = 26, DepartmentId = 31, Division = "ITOR/CIO", Office = "" });
            builder.HasData(new DepartmentMap() { Id = 27, DepartmentId = 31, Division = "ITOR/E-Gov Cyber Security", Office = "" });
            builder.HasData(new DepartmentMap() { Id = 28, DepartmentId = 31, Division = "ITOR/E-Gov DAD", Office = "" });
            builder.HasData(new DepartmentMap() { Id = 29, DepartmentId = 31, Division = "ITOR/E-Gov Oversight and Analytics", Office = "" });
            builder.HasData(new DepartmentMap() { Id = 30, DepartmentId = 31, Division = "ITOR/E-Gov Policy-Budget-Comms", Office = "" });
            builder.HasData(new DepartmentMap() { Id = 31, DepartmentId = 31, Division = "ITOR/General Counsel", Office = "" });
            builder.HasData(new DepartmentMap() { Id = 32, DepartmentId = 25, Division = "ITOR/USDS", Office = "" });
            //builder.HasData(new DepartmentMap() { Id = 33, DepartmentId = 11, Division = "Legislative Reference Division", Office = "Defense Operations, Personnel, and Support Branch" });
            builder.HasData(new DepartmentMap() { Id = 34, DepartmentId = 12, Division = "Legislative Reference Division", Office = "Economic/Science/General Government Branch" });
            builder.HasData(new DepartmentMap() { Id = 35, DepartmentId = 13, Division = "Legislative Reference Division", Office = "Health/Education/Veterans/Social Program Branch" });
            builder.HasData(new DepartmentMap() { Id = 36, DepartmentId = 11, Division = "Legislative Reference Division", Office = "" });
            builder.HasData(new DepartmentMap() { Id = 37, DepartmentId = 11, Division = "Legislative Reference Division", Office = "Office of the Assistant Director" });
            builder.HasData(new DepartmentMap() { Id = 38, DepartmentId = 14, Division = "Legislative Reference Division", Office = "Resources/Defense/International Branch" });
            builder.HasData(new DepartmentMap() { Id = 39, DepartmentId = 8, Division = "Management and Operations Division", Office = "" });
            builder.HasData(new DepartmentMap() { Id = 40, DepartmentId = 8, Division = "Management and Operations Division", Office = "Office of Budget, Finance, and Travel Management" });
            builder.HasData(new DepartmentMap() { Id = 41, DepartmentId = 8, Division = "Management and Operations Division", Office = "Office of Human Capital" });
            builder.HasData(new DepartmentMap() { Id = 42, DepartmentId = 8, Division = "Management and Operations Division", Office = "Office of Information Technology" });
            builder.HasData(new DepartmentMap() { Id = 43, DepartmentId = 8, Division = "Management and Operations Division", Office = "Office of Support Services" });
            builder.HasData(new DepartmentMap() { Id = 44, DepartmentId = 79, Division = "National Security Programs", Office = "Command/Control/Communications/Intelligence Branch" });
            builder.HasData(new DepartmentMap() { Id = 45, DepartmentId = 77, Division = "National Security Programs", Office = "Economics Affairs" });
            builder.HasData(new DepartmentMap() { Id = 46, DepartmentId = 75, Division = "National Security Programs", Office = "International Affairs Division" });
            builder.HasData(new DepartmentMap() { Id = 47, DepartmentId = 78, Division = "National Security Programs", Office = "National Security Division" });
            builder.HasData(new DepartmentMap() { Id = 48, DepartmentId = 74, Division = "National Security Programs", Office = "Office of the Associate Director, NSP" });
            builder.HasData(new DepartmentMap() { Id = 49, DepartmentId = 87, Division = "National Security Programs", Office = "Defense Investments Branch" });
            builder.HasData(new DepartmentMap() { Id = 50, DepartmentId = 80, Division = "National Security Programs", Office = "Defense Operations, Personnel, and Support Branch" });
            builder.HasData(new DepartmentMap() { Id = 51, DepartmentId = 76, Division = "National Security Programs", Office = "State Branch" });
            builder.HasData(new DepartmentMap() { Id = 52, DepartmentId = 82, Division = "National Security Programs", Office = "Veterans Affairs/Defense Health Branch" });
            builder.HasData(new DepartmentMap() { Id = 53, DepartmentId = 50, Division = "Natural Resource Programs", Office = "Agriculture Branch" });
            builder.HasData(new DepartmentMap() { Id = 54, DepartmentId = 46, Division = "Natural Resource Programs", Office = "Energy Branch" });
            builder.HasData(new DepartmentMap() { Id = 55, DepartmentId = 45, Division = "Natural Resource Programs", Office = "Energy/Science/Water Division" });
            builder.HasData(new DepartmentMap() { Id = 56, DepartmentId = 51, Division = "Natural Resource Programs", Office = "Environment Branch" });
            builder.HasData(new DepartmentMap() { Id = 57, DepartmentId = 52, Division = "Natural Resource Programs", Office = "Interior Branch" });
            builder.HasData(new DepartmentMap() { Id = 58, DepartmentId = 44, Division = "Natural Resource Programs", Office = "Office of the Associate Director, NRP" });
            builder.HasData(new DepartmentMap() { Id = 59, DepartmentId = 49, Division = "Natural Resource Programs", Office = "Natural Resources Division" });
            builder.HasData(new DepartmentMap() { Id = 60, DepartmentId = 47, Division = "Natural Resource Programs", Office = "Science and Space Branch" });
            builder.HasData(new DepartmentMap() { Id = 61, DepartmentId = 48, Division = "Natural Resource Programs", Office = "Water and Power Branch" });
            builder.HasData(new DepartmentMap() { Id = 62, DepartmentId = 17, Division = "Office Assistant Director Budget Review", Office = "Budget Analysis Branch" });
            builder.HasData(new DepartmentMap() { Id = 63, DepartmentId = 21, Division = "Office Assistant Director Budget Review", Office = "Budget Concept Branch" });
            builder.HasData(new DepartmentMap() { Id = 64, DepartmentId = 15, Division = "Office Assistant Director Budget Review", Office = "" });
            builder.HasData(new DepartmentMap() { Id = 65, DepartmentId = 20, Division = "Office Assistant Director Budget Review", Office = "Budget Review Branch" });
            builder.HasData(new DepartmentMap() { Id = 66, DepartmentId = 18, Division = "Office Assistant Director Budget Review", Office = "Budget Systems Branch" });
            builder.HasData(new DepartmentMap() { Id = 67, DepartmentId = 28, Division = "Office of Fed Financial Mgmt", Office = "Financial Integrity and Risk Management Branch" });
            builder.HasData(new DepartmentMap() { Id = 68, DepartmentId = 29, Division = "Office of Fed Financial Mgmt", Office = "Management Controls and Assistance Branch" });
            builder.HasData(new DepartmentMap() { Id = 69, DepartmentId = 27, Division = "Office of Fed Financial Mgmt", Office = "Office of Deputy Controller" });
            builder.HasData(new DepartmentMap() { Id = 70, DepartmentId = 89, Division = "Office of Federal Procurement Policy", Office = "Efficiency, Data, and Workforce Management Branch" });
            builder.HasData(new DepartmentMap() { Id = 71, DepartmentId = 30, Division = "Office of Federal Procurement Policy", Office = "Office of the Administrator, OFPP" });
            builder.HasData(new DepartmentMap() { Id = 72, DepartmentId = 90, Division = "Office of Federal Procurement Policy", Office = "Policey Development and Innovation Branch" });
            builder.HasData(new DepartmentMap() { Id = 73, DepartmentId = 9, Division = "Office of General Counsel", Office = "" });
            builder.HasData(new DepartmentMap() { Id = 74, DepartmentId = 36, Division = "Office Of Information And Regulatory Affairs", Office = "OIRA/ODA/Food, Health, and Labor Branch" });
            builder.HasData(new DepartmentMap() { Id = 75, DepartmentId = 37, Division = "Office of Information and Regulatory Affairs", Office = "OIRA/ODA/Information Policy Branch" });
            builder.HasData(new DepartmentMap() { Id = 76, DepartmentId = 37, Division = "Office of Information and Regulatory Affairs", Office = "OIRA/ODA/Information Policy Branch O Fund" });
            builder.HasData(new DepartmentMap() { Id = 77, DepartmentId = 38, Division = "Office of Information and Regulatory Affairs", Office = "OIRA/ODA/Natural Resources and Environmental Branch" });
            builder.HasData(new DepartmentMap() { Id = 78, DepartmentId = 35, Division = "Office of Information and Regulatory Affairs", Office = "" });
            builder.HasData(new DepartmentMap() { Id = 79, DepartmentId = 35, Division = "Office Of Information And Regulatory Affairs", Office = "Office of the Administrator, OIRA" });
            builder.HasData(new DepartmentMap() { Id = 80, DepartmentId = 35, Division = "Office of Information and Regulatory Affairs", Office = "Office of the Deputy Administrator" });
            builder.HasData(new DepartmentMap() { Id = 81, DepartmentId = 39, Division = "Office of Information and Regulatory Affairs", Office = "OIRA/ODA/Privacy Branch" });
            builder.HasData(new DepartmentMap() { Id = 82, DepartmentId = 40, Division = "Office of Information and Regulatory Affairs", Office = "OIRA/ODA/Statistical and Science Policy Branch" });
            builder.HasData(new DepartmentMap() { Id = 83, DepartmentId = 41, Division = "Office of Information and Regulatory Affairs", Office = "OIRA/ODA/Transportation and Security Branch" });
            builder.HasData(new DepartmentMap() { Id = 84, DepartmentId = 41, Division = "Office of Information and Regulatory Affairs", Office = "OIRA/ODA/Transportation and Security Branch O Fund" });
            builder.HasData(new DepartmentMap() { Id = 85, DepartmentId = 30, Division = "Office of Scheduling and Advance", Office = "Office of the Administrator, OFPP" });
            builder.HasData(new DepartmentMap() { Id = 86, DepartmentId = 10, Division = "Staff Offices", Office = "Economic Policy" });
            builder.HasData(new DepartmentMap() { Id = 87, DepartmentId = 9, Division = "Staff Offices", Office = "General Counsel" });
            builder.HasData(new DepartmentMap() { Id = 88, DepartmentId = 6, Division = "Staff Offices", Office = "Legislative Affairs" });
            builder.HasData(new DepartmentMap() { Id = 89, DepartmentId = 8, Division = "Staff Offices", Office = "Management and Operations Division" });
            builder.HasData(new DepartmentMap() { Id = 90, DepartmentId = 22, Division = "Staff Offices", Office = "Performance and Personnel Management Division" });
            builder.HasData(new DepartmentMap() { Id = 91, DepartmentId = 93, Division = "Staff Offices", Office = "Communications" });
            builder.HasData(new DepartmentMap() { Id = 92, DepartmentId = 90, Division = "Office of Federal Procurement Policy", Office = "Policy Development and Innovation Branch" });
        }
    }
}
