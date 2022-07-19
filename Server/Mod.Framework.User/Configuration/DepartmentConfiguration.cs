using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mod.Framework.User.Entities;
using static Mod.Framework.User.Entities.Department;

namespace Mod.PortfolioManager.Infrastructure.EfCore.Configurations
{
    public class DepartmentConfiguration : IEntityTypeConfiguration<Department>
    {
        public void Configure(EntityTypeBuilder<Department> builder)
        {
            builder.HasMany(e => e.Children)
                 .WithOne(e => e.Parent)
                 .HasForeignKey(e => e.ParentDepartmentId)
                 .OnDelete(DeleteBehavior.NoAction);

            SeedData(builder);
        }

        private void SeedData(EntityTypeBuilder<Department> builder)
        {
            builder.HasData(new Department() { Id = 1, Name = "Office of the Director", AdSecurityGroup = "OMB_DIR", Abbreviation = "DIR", ParentDepartmentId = null, InternalOrgId = 2 });
            builder.HasData(new Department() { Id = 2, Name = "Deputy Director", AdSecurityGroup = "", Abbreviation = "DD", ParentDepartmentId = null, InternalOrgId = null });
            builder.HasData(new Department() { Id = 3, Name = "Deputy Director for Management", AdSecurityGroup = "", Abbreviation = "DDM", ParentDepartmentId = null, InternalOrgId = null });
            builder.HasData(new Department() { Id = 4, Name = "Statutory Offices", AdSecurityGroup = "", Abbreviation = "", ParentDepartmentId = 1, InternalOrgId = null });
            builder.HasData(new Department() { Id = 5, Name = "OMB-Wide Support Offices", AdSecurityGroup = "", Abbreviation = "", ParentDepartmentId = 1, InternalOrgId = null });

            builder.HasData(new Department() { Id = 6, Name = "Legislative Affairs", AdSecurityGroup = "SG-OMB-Legislative_Affairs", Abbreviation = "LA", ParentDepartmentId = 5, InternalOrgId = 10 });
            builder.HasData(new Department() { Id = 7, Name = "Strategic Planning & Communications", Abbreviation = "", AdSecurityGroup = "", ParentDepartmentId = 5, IsDeleted = true, InternalOrgId = null });
            builder.HasData(new Department() { Id = 8, Name = "Management and Operations Division", Abbreviation = "MOD", AdSecurityGroup = "OMB_ADM", ParentDepartmentId = 5, InternalOrgId = 1 });
            builder.HasData(new Department() { Id = 93, Name = "Communications", Abbreviation = "COMM", AdSecurityGroup = "", ParentDepartmentId = 5, InternalOrgId = 7 });
            //builder.HasData(new Department() { Id = 83, Name = "Office of Budget, Finance, and Travel Management", Abbreviation = "", AdSecurityGroup = "", ParentDepartmentId = 8, InternalOrgId = 46 });
            //builder.HasData(new Department() { Id = 84, Name = "Office of Human Capital", Abbreviation = "", AdSecurityGroup = "", ParentDepartmentId = 8, InternalOrgId = null });
            //builder.HasData(new Department() { Id = 85, Name = "Office of Information Technology", Abbreviation = "", AdSecurityGroup = "", ParentDepartmentId = 8, InternalOrgId = 44 });
            //builder.HasData(new Department() { Id = 86, Name = "Office of Support Services", Abbreviation = "", AdSecurityGroup = "", ParentDepartmentId = 8, InternalOrgId = 45 });

            builder.HasData(new Department() { Id = 9, Name = "General Counsel", AdSecurityGroup = "OMB_GC", Abbreviation = "GC", ParentDepartmentId = 5, InternalOrgId = 9 });
            builder.HasData(new Department() { Id = 10, Name = "Economic Policy", AdSecurityGroup = "OMB ECON", Abbreviation = "EP", ParentDepartmentId = 5, InternalOrgId = 8 });

            builder.HasData(new Department() { Id = 11, Name = "Legislative Reference Division", AdSecurityGroup = "", Abbreviation = "LRD", ParentDepartmentId = 5, InternalOrgId = 11 });
            builder.HasData(new Department() { Id = 12, Name = "Economics, Science, Gen. Govt. Branch", AdSecurityGroup = "OMB_LRD_ESGG", Abbreviation = "ESGG", ParentDepartmentId = 11, InternalOrgId = null });
            builder.HasData(new Department() { Id = 13, Name = "Health, Education, Veterans & Social Programs Branch", AdSecurityGroup = "OMB_LRD_HEVS", Abbreviation = "HEVS", ParentDepartmentId = 11, InternalOrgId = null });
            builder.HasData(new Department() { Id = 14, Name = "Resources, Defense, International Branch", AdSecurityGroup = "OMB_LRD_RDI", Abbreviation = "RDI", ParentDepartmentId = 11, InternalOrgId = null });
            //builder.HasData(new Department() { Id = 88, Name = "Defense Operations, Personnel, and Support Branch", AdSecurityGroup = "", Abbreviation = "", ParentDepartmentId = 11, InternalOrgId = null });

            builder.HasData(new Department() { Id = 15, Name = "Budget Review", AdSecurityGroup = "", Abbreviation = "BR", ParentDepartmentId = 5, InternalOrgId = 3 });
            builder.HasData(new Department() { Id = 16, Name = "Budget Analysis & Systems Division", AdSecurityGroup = "", Abbreviation = "BASD", ParentDepartmentId = 15, InternalOrgId = null });
            builder.HasData(new Department() { Id = 17, Name = "Budget Analysis Branch", AdSecurityGroup = "OMB_BR_BASD_BAB", Abbreviation = "BAB", ParentDepartmentId = 16, InternalOrgId = 4 });
            builder.HasData(new Department() { Id = 18, Name = "Budget Systems Branch", AdSecurityGroup = "OMB_BR_BASD_BSB", Abbreviation = "BSB", ParentDepartmentId = 16, InternalOrgId = 6 });
            builder.HasData(new Department() { Id = 19, Name = "Budget Review & Concepts Division", AdSecurityGroup = "", Abbreviation = "BRCD", ParentDepartmentId = 15, InternalOrgId = null });
            builder.HasData(new Department() { Id = 20, Name = "Budget Review Branch", AdSecurityGroup = "OMB_BR_BRCD_BRB", Abbreviation = "BRB", ParentDepartmentId = 19, InternalOrgId = 5 });
            builder.HasData(new Department() { Id = 21, Name = "Budget Concepts Branch", AdSecurityGroup = "OMB_BR_BRCD_BCB", Abbreviation = "BCB", ParentDepartmentId = 19, InternalOrgId = 30 });

            builder.HasData(new Department() { Id = 22, Name = "Office of Performance and Personnel Management", AdSecurityGroup = "SG-OMB-BPU", Abbreviation = "OPPM", ParentDepartmentId = 5, InternalOrgId = 31 });
            builder.HasData(new Department() { Id = 23, Name = "Performance Unit", AdSecurityGroup = "", Abbreviation = "", ParentDepartmentId = 22, IsDeleted = true, InternalOrgId = null });
            builder.HasData(new Department() { Id = 24, Name = "Personnel Unit", AdSecurityGroup = "", Abbreviation = "", ParentDepartmentId = 22, IsDeleted = true, InternalOrgId = null });

            builder.HasData(new Department() { Id = 25, Name = "U.S. Digital Service", AdSecurityGroup = "SG-OMB-USDS", Abbreviation = "USDS", ParentDepartmentId = 5, InternalOrgId = 29 });

            builder.HasData(new Department() { Id = 27, Name = "Office of Federal Financial Management", AdSecurityGroup = "OMB_OFFM_CAL", Abbreviation = "OFFM", ParentDepartmentId = 4, InternalOrgId = 22 });
            builder.HasData(new Department() { Id = 28, Name = "Financial Integrity and Risk Management Branch", AdSecurityGroup = "", Abbreviation = "FIRM", ParentDepartmentId = 27, InternalOrgId = null });
            builder.HasData(new Department() { Id = 29, Name = "Management Controls and Assistance Branch", AdSecurityGroup = "", Abbreviation = "MCAB", ParentDepartmentId = 27, InternalOrgId = null });

            builder.HasData(new Department() { Id = 30, Name = "Office of Federal Procurement Policy", AdSecurityGroup = "OMB_OFPP", Abbreviation = "OFPP", ParentDepartmentId = 4, InternalOrgId = 23 });
            builder.HasData(new Department() { Id = 89, Name = "Efficiency, Data, and Workforce Management Branch", AdSecurityGroup = "", Abbreviation = "", ParentDepartmentId = 30, InternalOrgId = null });
            builder.HasData(new Department() { Id = 90, Name = "Policy Development and Innovation Branch", AdSecurityGroup = "", Abbreviation = "PDI", ParentDepartmentId = 30, InternalOrgId = null });

            builder.HasData(new Department() { Id = 31, Name = "Office of the Federal Chief Information Officer", AdSecurityGroup = "SG-OMB-OCIO", Abbreviation = "OFCIO", ParentDepartmentId = 4, InternalOrgId = null });
            builder.HasData(new Department() { Id = 32, Name = "Agency Oversight", AdSecurityGroup = "", Abbreviation = "", ParentDepartmentId = 31, InternalOrgId = null });
            builder.HasData(new Department() { Id = 33, Name = "Cyber and National Security Unit", AdSecurityGroup = "", Abbreviation = "", ParentDepartmentId = 31, InternalOrgId = null });
            builder.HasData(new Department() { Id = 34, Name = "Policy, Budget, and Communications Unit", AdSecurityGroup = "", Abbreviation = "", ParentDepartmentId = 31, InternalOrgId = null });

            builder.HasData(new Department() { Id = 35, Name = "Office of Information & Regulatory Affairs", AdSecurityGroup = "OMB_OIRA_NR", Abbreviation = "OIRA", ParentDepartmentId = 4, InternalOrgId = 24 });
            builder.HasData(new Department() { Id = 36, Name = "Food, Health, and Labor Branch", AdSecurityGroup = "", Abbreviation = "FHLB", ParentDepartmentId = 35, InternalOrgId = null });
            builder.HasData(new Department() { Id = 37, Name = "Information Policy Branch", AdSecurityGroup = "SG-OMB-OIRA-IPT", Abbreviation = "IPB", ParentDepartmentId = 35, InternalOrgId = null });
            builder.HasData(new Department() { Id = 38, Name = "Natural Resources and Environment Branch", AdSecurityGroup = "OMB_OIRA_HRH", Abbreviation = "NREB", ParentDepartmentId = 35, InternalOrgId = null });
            builder.HasData(new Department() { Id = 39, Name = "Privacy Branch", AdSecurityGroup = "", Abbreviation = "Privacy", ParentDepartmentId = 35, InternalOrgId = null });
            builder.HasData(new Department() { Id = 40, Name = "Statistical & Science Policy Branch", AdSecurityGroup = "OMB_OIRA_SP", Abbreviation = "SSP", ParentDepartmentId = 35, InternalOrgId = null });
            builder.HasData(new Department() { Id = 41, Name = "Transportation and Security Branch", AdSecurityGroup = "", Abbreviation = "TSB", ParentDepartmentId = 35, InternalOrgId = null });

            builder.HasData(new Department() { Id = 43, Name = "Resource Management Offices", AdSecurityGroup = "", Abbreviation = "RMO", ParentDepartmentId = 1, InternalOrgId = null });

            builder.HasData(new Department() { Id = 44, Name = "Climate, Energy, Environment & Science Programs", AdSecurityGroup = "", Abbreviation = "CEES", ParentDepartmentId = 43, InternalOrgId = null });
            builder.HasData(new Department() { Id = 45, Name = "Energy, Science & Water Division", AdSecurityGroup = "", Abbreviation = "ESWD", ParentDepartmentId = 44, InternalOrgId = 18 });
            builder.HasData(new Department() { Id = 46, Name = "Energy Branch", AdSecurityGroup = "", Abbreviation = "EB", ParentDepartmentId = 45, InternalOrgId = null });
            builder.HasData(new Department() { Id = 47, Name = "Science & Space Branch", AdSecurityGroup = "", Abbreviation = "SSB", ParentDepartmentId = 45, InternalOrgId = null });
            builder.HasData(new Department() { Id = 48, Name = "Water and Power Branch", AdSecurityGroup = "", Abbreviation = "WPB", ParentDepartmentId = 45, InternalOrgId = null });
            builder.HasData(new Department() { Id = 49, Name = "Natural Resources Division", AdSecurityGroup = "", Abbreviation = "NRD", ParentDepartmentId = 44, InternalOrgId = 19 });
            builder.HasData(new Department() { Id = 50, Name = "Agriculture Branch", AdSecurityGroup = "", Abbreviation = "AB", ParentDepartmentId = 49, InternalOrgId = null });
            builder.HasData(new Department() { Id = 51, Name = "Environment Branch", AdSecurityGroup = "", Abbreviation = "EB", ParentDepartmentId = 49, InternalOrgId = null });
            builder.HasData(new Department() { Id = 52, Name = "Interior Branch", AdSecurityGroup = "", Abbreviation = "IB", ParentDepartmentId = 49, InternalOrgId = null });

            builder.HasData(new Department() { Id = 53, Name = "Education, Income, Maintenance, and Labor Programs", AdSecurityGroup = "", Abbreviation = "EIML", ParentDepartmentId = 43, InternalOrgId = 20 });
            builder.HasData(new Department() { Id = 54, Name = "Education, Income, Maintenance, and Labor Division", AdSecurityGroup = "", Abbreviation = "EIML", ParentDepartmentId = 53, InternalOrgId = 21 });
            builder.HasData(new Department() { Id = 55, Name = "Education Branch", AdSecurityGroup = "", Abbreviation = "EIML", ParentDepartmentId = 54, InternalOrgId = null });
            builder.HasData(new Department() { Id = 56, Name = "Income Maintenance Branch", AdSecurityGroup = "", Abbreviation = "EIML", ParentDepartmentId = 54, InternalOrgId = null });
            builder.HasData(new Department() { Id = 57, Name = "Labor Branch", AdSecurityGroup = "", Abbreviation = "EIML", ParentDepartmentId = 54, InternalOrgId = null });

            builder.HasData(new Department() { Id = 58, Name = "Health Programs", AdSecurityGroup = "", Abbreviation = "Health", ParentDepartmentId = 43, InternalOrgId = 33 });
            builder.HasData(new Department() { Id = 59, Name = "Health Division", AdSecurityGroup = "", Abbreviation = "HD", ParentDepartmentId = 58, InternalOrgId = 34 });
            builder.HasData(new Department() { Id = 60, Name = "Health & Human Services Branch", AdSecurityGroup = "", Abbreviation = "HHS", ParentDepartmentId = 59, InternalOrgId = null });
            builder.HasData(new Department() { Id = 61, Name = "Medicaid Branch", AdSecurityGroup = "", Abbreviation = "Medicain", ParentDepartmentId = 59, InternalOrgId = null });
            builder.HasData(new Department() { Id = 62, Name = "Medicare Branch", AdSecurityGroup = "", Abbreviation = "Medicain", ParentDepartmentId = 59, InternalOrgId = null });
            builder.HasData(new Department() { Id = 63, Name = "Public Health Branch", AdSecurityGroup = "", Abbreviation = "PHB", ParentDepartmentId = 59, InternalOrgId = null });
            builder.HasData(new Department() { Id = 64, Name = "Health Insurance, Data, and Analysis Branch", AdSecurityGroup = "HIDA", Abbreviation = "", ParentDepartmentId = 59, InternalOrgId = null });

            builder.HasData(new Department() { Id = 65, Name = "Transportation, Homeland Security, Justice, & Services Programs", AdSecurityGroup = "", Abbreviation = "THSJSP", ParentDepartmentId = 43, InternalOrgId = null });
            builder.HasData(new Department() { Id = 66, Name = "Transportation, Homeland, Justice & Services Division", AdSecurityGroup = "", Abbreviation = "THJS", ParentDepartmentId = 65, InternalOrgId = 32 });
            builder.HasData(new Department() { Id = 67, Name = "Transportation/GSA Branch", AdSecurityGroup = "", Abbreviation = "TGB", ParentDepartmentId = 66, InternalOrgId = null });
            builder.HasData(new Department() { Id = 68, Name = "Homeland Security Branch", AdSecurityGroup = "", Abbreviation = "HSB", ParentDepartmentId = 66, InternalOrgId = null });
            builder.HasData(new Department() { Id = 69, Name = "Justice Branch", AdSecurityGroup = "", Abbreviation = "Justice", ParentDepartmentId = 66, InternalOrgId = null });
            builder.HasData(new Department() { Id = 92, Name = "Housing, Treasury, & Commerce Programs", AdSecurityGroup = "", Abbreviation = "THSJSP", ParentDepartmentId = 43, InternalOrgId = null });
            builder.HasData(new Department() { Id = 70, Name = "Housing, Treasury, & Comm. Division", AdSecurityGroup = "", Abbreviation = "HTC", ParentDepartmentId = 92, InternalOrgId = 16 });
            builder.HasData(new Department() { Id = 71, Name = "Housing Branch", AdSecurityGroup = "", Abbreviation = "Housing", ParentDepartmentId = 70, InternalOrgId = null });
            builder.HasData(new Department() { Id = 72, Name = "Treasury Branch", AdSecurityGroup = "", Abbreviation = "Treasury", ParentDepartmentId = 70, InternalOrgId = null });
            builder.HasData(new Department() { Id = 73, Name = "Commerce Branch", AdSecurityGroup = "", Abbreviation = "Commerce", ParentDepartmentId = 70, InternalOrgId = null });

            builder.HasData(new Department() { Id = 74, Name = "National Security Programs", AdSecurityGroup = "", Abbreviation = "NSP", ParentDepartmentId = 43, InternalOrgId = 12 });
            builder.HasData(new Department() { Id = 75, Name = "International Affairs Division", AdSecurityGroup = "", Abbreviation = "IAD", ParentDepartmentId = 74, InternalOrgId = 13 });
            builder.HasData(new Department() { Id = 76, Name = "State Branch", AdSecurityGroup = "", Abbreviation = "State", ParentDepartmentId = 75, InternalOrgId = null });
            builder.HasData(new Department() { Id = 77, Name = "Economic Affairs Branch", AdSecurityGroup = "", Abbreviation = "EAB", ParentDepartmentId = 75, InternalOrgId = null });
            builder.HasData(new Department() { Id = 78, Name = "National Security Division", AdSecurityGroup = "", Abbreviation = "NSD", ParentDepartmentId = 74, InternalOrgId = 14 });

            builder.HasData(new Department() { Id = 87, Name = "Defense Investments Branch", AdSecurityGroup = "", Abbreviation = "", ParentDepartmentId = 78, InternalOrgId = null });
            
            builder.HasData(new Department() { Id = 79, Name = "Command, Control, Comms, Computers, & Intelligence Branch", AdSecurityGroup = "", Abbreviation = "NSP", ParentDepartmentId = 78, InternalOrgId = null });
            builder.HasData(new Department() { Id = 80, Name = "Defense Operations Branch", AdSecurityGroup = "", Abbreviation = "NSP", ParentDepartmentId = 78, InternalOrgId = null });
            builder.HasData(new Department() { Id = 81, Name = "Force Structure & Investment Branch", AdSecurityGroup = "", Abbreviation = "NSP", ParentDepartmentId = 78, IsDeleted = true, InternalOrgId = null });
            builder.HasData(new Department() { Id = 82, Name = "Veterans Affairs & Defense Health Branch", AdSecurityGroup = "", Abbreviation = "NSP", ParentDepartmentId = 78, InternalOrgId = null });

            // This is an odd case.  The Unassigned department is used to disassociate employees from the Org Chart, which means that this Department will not show up in the "GetAll" method because
            // the GetAll method traverses the org chart to dispense all the departments.  In the UI, Unassigned was added specifically to the Override Department list
            // This entry needs to be in the Db or else it will not accept Unassigned as a Department.
            // This Department has a parent of itself.
            builder.HasData(new Department() { Id = 91, Name = "Unassigned", AdSecurityGroup = "", Abbreviation = "", ParentDepartmentId = 91, InternalOrgId = null });
        }
    }
}
