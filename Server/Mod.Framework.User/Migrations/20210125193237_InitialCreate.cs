using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Mod.Framework.User.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Department",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedBy = table.Column<string>(nullable: true),
                    ModifiedBy = table.Column<string>(nullable: true),
                    ModifiedTime = table.Column<DateTime>(nullable: false),
                    CreatedTime = table.Column<DateTime>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    DeletedBy = table.Column<string>(nullable: true),
                    DeletedTime = table.Column<DateTime>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Abbreviation = table.Column<string>(nullable: true),
                    AdSecurityGroup = table.Column<string>(nullable: true),
                    ParentDepartmentId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Department", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Department_Department_ParentDepartmentId",
                        column: x => x.ParentDepartmentId,
                        principalTable: "Department",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "DepartmentMap",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DepartmentId = table.Column<int>(nullable: false),
                    Division = table.Column<string>(nullable: true),
                    Office = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DepartmentMap", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DepartmentMap_Department_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Department",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Employee",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Ein = table.Column<string>(nullable: true),
                    Upn = table.Column<string>(maxLength: 255, nullable: true),
                    SamAccountName = table.Column<string>(maxLength: 255, nullable: true),
                    Type = table.Column<string>(maxLength: 50, nullable: true),
                    Company = table.Column<string>(nullable: true),
                    Dept = table.Column<string>(nullable: true),
                    Division = table.Column<string>(nullable: true),
                    Office = table.Column<string>(nullable: true),
                    GivenName = table.Column<string>(maxLength: 50, nullable: true),
                    MiddleName = table.Column<string>(maxLength: 50, nullable: true),
                    Surname = table.Column<string>(maxLength: 50, nullable: true),
                    PreferredName = table.Column<string>(nullable: true),
                    DisplayName = table.Column<string>(maxLength: 255, nullable: true),
                    Title = table.Column<string>(maxLength: 255, nullable: true),
                    EmailAddress = table.Column<string>(maxLength: 255, nullable: true),
                    StreetAddress = table.Column<string>(maxLength: 255, nullable: true),
                    City = table.Column<string>(maxLength: 50, nullable: true),
                    State = table.Column<string>(nullable: true),
                    PostalCode = table.Column<string>(maxLength: 25, nullable: true),
                    OfficePhone = table.Column<string>(maxLength: 25, nullable: true),
                    MobilePhone = table.Column<string>(maxLength: 25, nullable: true),
                    MailNickName = table.Column<string>(nullable: true),
                    Inactive = table.Column<bool>(nullable: false),
                    InactiveDate = table.Column<DateTime>(nullable: true),
                    ManagerEin = table.Column<string>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false),
                    ModifiedTime = table.Column<DateTime>(nullable: false),
                    ReportsToEmployeeId = table.Column<int>(nullable: true),
                    DepartmentId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employee", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Employee_Department_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Department",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Employee_Employee_ReportsToEmployeeId",
                        column: x => x.ReportsToEmployeeId,
                        principalTable: "Employee",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "EmployeeAttribute",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmployeeId = table.Column<int>(nullable: false),
                    Attribute = table.Column<string>(nullable: true),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeAttribute", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EmployeeAttribute_Employee_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employee",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeGroup",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    EmployeeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeGroup", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EmployeeGroup_Employee_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employee",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Department",
                columns: new[] { "Id", "Abbreviation", "AdSecurityGroup", "CreatedBy", "CreatedTime", "DeletedBy", "DeletedTime", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "ParentDepartmentId" },
                values: new object[] { 1, "DIR", "OMB_DIR", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Office of the Director", null });

            migrationBuilder.InsertData(
                table: "Department",
                columns: new[] { "Id", "Abbreviation", "AdSecurityGroup", "CreatedBy", "CreatedTime", "DeletedBy", "DeletedTime", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "ParentDepartmentId" },
                values: new object[,]
                {
                    { 4, "SO", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Statutory Offices", 1 },
                    { 5, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "OMB-Wide Support Offices", 1 },
                    { 43, "RMO", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Resource Management Offices", 1 }
                });

            migrationBuilder.InsertData(
                table: "DepartmentMap",
                columns: new[] { "Id", "DepartmentId", "Division", "Office" },
                values: new object[,]
                {
                    { 1, 1, "Directors Office", "Deputy Director for Management's Office (DD/M)" },
                    { 2, 1, "Directors Office", "" },
                    { 3, 1, "Directors Office", "Intellectual Property Enforcement Coordinators (IPEC) Office" },
                    { 91, 1, "Staff Offices", "Communications" }
                });

            migrationBuilder.InsertData(
                table: "Department",
                columns: new[] { "Id", "Abbreviation", "AdSecurityGroup", "CreatedBy", "CreatedTime", "DeletedBy", "DeletedTime", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "ParentDepartmentId" },
                values: new object[,]
                {
                    { 27, "OFFM", "OMB_OFFM_CAL", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Office of Federal Financial Management", 4 },
                    { 58, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Health Programs", 43 },
                    { 53, "EIML", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Education, Income, Maintenance, and Labor Programs", 43 },
                    { 44, "FA", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Natural Resource Programs", 43 },
                    { 25, "USDS", "SG-OMB-USDS", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "U.S. Digital Service", 5 },
                    { 22, "OPPM", "SG-OMB-BPU", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Office of Performance and Personnel Management", 5 },
                    { 15, "BR", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Budget Review", 5 },
                    { 11, "LRD", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Legislative Reference Division", 5 },
                    { 10, "EP", "OMB ECON", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Economic Policy", 5 },
                    { 9, "GC", "OMB_GC", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "General Counsel", 5 },
                    { 8, "MOD", "OMB_ADM", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Management and Operations Division", 5 },
                    { 7, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, true, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Strategic Planning & Communications", 5 },
                    { 6, "LA", "SG-OMB-Legislative_Affairs", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Legislative Affairs", 5 },
                    { 35, "OIRA", "OMB_OIRA_NR", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Office of Information & Regulatory Affairs", 4 },
                    { 31, "OFCIO", "SG-OMB-OCIO", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Office of the Federal Chief Information Officer", 4 },
                    { 30, "OFPP", "OMB_OFPP", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Office of Federal Procurement Policy", 4 },
                    { 65, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "General Government Programs", 43 },
                    { 74, "NSP", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "National Security Programs", 43 }
                });

            migrationBuilder.InsertData(
                table: "Department",
                columns: new[] { "Id", "Abbreviation", "AdSecurityGroup", "CreatedBy", "CreatedTime", "DeletedBy", "DeletedTime", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "ParentDepartmentId" },
                values: new object[,]
                {
                    { 28, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Financial Integrity and Risk Management Branch", 27 },
                    { 14, "LRD", "OMB_LRD_RDI", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Resources, Defense, International Branch", 11 },
                    { 16, "BASD", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Budget Analysis & Systems Division", 15 },
                    { 78, "NSP", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "National Security Division", 74 },
                    { 19, "BRCD", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Budget Review & Concepts Division", 15 },
                    { 23, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, true, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Performance Unit", 22 },
                    { 24, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, true, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Personnel Unit", 22 },
                    { 41, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Transportation and Security Branch", 35 },
                    { 40, "OIRA", "OMB_OIRA_SP", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Statistical & Science Policy Branch", 35 },
                    { 39, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Privacy Branch", 35 },
                    { 38, "OIRA", "OMB_OIRA_HRH", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Natural Resources and Environment Branch", 35 },
                    { 37, "OIRA", "SG-OMB-OIRA-IPT", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Information Policy Branch", 35 },
                    { 13, "LRD", "OMB_LRD_HEVS", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Health, Education, Veterans & Social Programs Branch", 11 },
                    { 45, "FB", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Energy, Science & Water Division", 44 },
                    { 49, "FC", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Natural Resources Division", 44 },
                    { 36, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Food, Health, and Labor Branch", 35 },
                    { 54, "EIML", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Education, Income, Maintenance, and Labor Division", 53 },
                    { 29, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Management Controls and Assistance Branch", 27 },
                    { 75, "NSP", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "International Affairs Division", 74 },
                    { 89, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Efficiency, Data, and Workforce Management Branch", 30 },
                    { 90, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Policy Development and Innovation Branch", 30 },
                    { 32, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Agency Oversight", 31 },
                    { 70, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Housing, Treasury, & Comm. Division", 65 },
                    { 34, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Policy, Budget, and Communications Unit", 31 },
                    { 66, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Transportation, Homeland, Justice & Services Division", 65 },
                    { 59, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Health Division", 58 },
                    { 33, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Cyber and National Security Unit", 31 },
                    { 12, "LRD", "OMB_LRD_ESGG", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Economics, Science, Gen. Govt. Branch", 11 }
                });

            migrationBuilder.InsertData(
                table: "DepartmentMap",
                columns: new[] { "Id", "DepartmentId", "Division", "Office" },
                values: new object[,]
                {
                    { 32, 25, "ITOR/USDS", "" },
                    { 90, 22, "Staff Offices", "Performance and Personnel Management Division" },
                    { 58, 44, "Natural Resource Programs", "Office of the Associate Director, NRP" },
                    { 10, 65, "General Government Programs", "Office Of the Associate Director, GGP" },
                    { 64, 15, "Office Assistant Director Budget Review", "" },
                    { 18, 58, "Health Programs", "Office of the Associate Director, Health Division" },
                    { 37, 11, "Legislative Reference Division", "Office of the Assistant Director" },
                    { 36, 11, "Legislative Reference Division", "" },
                    { 5, 53, "Education, Income Maintenance and Labor Programs", "Office of the Associate Director, EIML" },
                    { 41, 8, "Management and Operations Division", "Office of Human Capital" },
                    { 87, 9, "Staff Offices", "General Counsel" },
                    { 69, 27, "Office of Fed Financial Mgmt", "Office of Deputy Controller" },
                    { 71, 30, "Office of Federal Procurement Policy", "Office of the Administrator, OFPP" },
                    { 85, 30, "Office of Scheduling and Advance", "Office of the Administrator, OFPP" },
                    { 24, 31, "Information Tech & E-govt U", " " },
                    { 25, 31, "ITOR/Admin Services", "" },
                    { 26, 31, "ITOR/CIO", "" },
                    { 27, 31, "ITOR/E-Gov Cyber Security", "" },
                    { 28, 31, "ITOR/E-Gov DAD", "" },
                    { 29, 31, "ITOR/E-Gov Oversight and Analytics", "" },
                    { 30, 31, "ITOR/E-Gov Policy-Budget-Comms", "" },
                    { 31, 31, "ITOR/General Counsel", "" },
                    { 78, 35, "Office of Information and Regulatory Affairs", "" },
                    { 79, 35, "Office Of Information And Regulatory Affairs", "Office of the Administrator, OIRA" },
                    { 80, 35, "Office of Information and Regulatory Affairs", "Office of the Deputy Administrator" },
                    { 88, 6, "Staff Offices", "Legislative Affairs" },
                    { 39, 8, "Management and Operations Division", "" },
                    { 40, 8, "Management and Operations Division", "Office of Budget, Finance, and Travel Management" },
                    { 42, 8, "Management and Operations Division", "Office of Information Technology" },
                    { 43, 8, "Management and Operations Division", "Office of Support Services" },
                    { 89, 8, "Staff Offices", "Management and Operations Division" },
                    { 73, 9, "Office of General Counsel", "" },
                    { 86, 10, "Staff Offices", "Economic Policy" },
                    { 48, 74, "National Security Programs", "Office of the Associate Director, NSP" }
                });

            migrationBuilder.InsertData(
                table: "Department",
                columns: new[] { "Id", "Abbreviation", "AdSecurityGroup", "CreatedBy", "CreatedTime", "DeletedBy", "DeletedTime", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "ParentDepartmentId" },
                values: new object[,]
                {
                    { 20, "BRB", "OMB_BR_BRCD_BRB", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Budget Review Branch", 19 },
                    { 61, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Medicaid Branch", 59 },
                    { 60, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Health & Human Services Branch", 59 },
                    { 64, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Health Insurance, Data, and Analysis Branch", 59 },
                    { 57, "EIML", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Labor Branch", 54 },
                    { 56, "EIML", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Income Maintenance Branch", 54 },
                    { 55, "EIML", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Education Branch", 54 },
                    { 82, "NSP", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Veterans Affairs & Defense Health Branch", 78 },
                    { 52, "FCC", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Interior Branch", 49 },
                    { 51, "FCB", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Environment Branch", 49 },
                    { 50, "FCA", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Agriculture Branch", 49 },
                    { 48, "FBC", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Water and Power Branch", 45 },
                    { 47, "FBB", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Science & Space Branch", 45 },
                    { 46, "FBA", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Energy Branch", 45 },
                    { 21, "BCB", "OMB_BR_BRCD_BCB", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Budget Concept Branch", 19 },
                    { 62, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Medicare Branch", 59 },
                    { 63, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Public Health Branch", 59 },
                    { 17, "BAB", "OMB_BR_BASD_BAB", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Budget Analysis Branch", 16 },
                    { 67, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Transportation/GSA Branch", 66 },
                    { 68, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Homeland Security Branch", 66 },
                    { 69, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Justice Branch", 66 },
                    { 71, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Housing Branch", 66 },
                    { 81, "NSP", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, true, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Force Structure & Investment Branch", 78 },
                    { 72, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Treasury Branch", 66 },
                    { 73, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Commerce Branch", 66 },
                    { 18, "BSB", "OMB_BR_BASD_BSB", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Budget Systems Branch", 16 },
                    { 76, "NSP", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "State Branch", 75 },
                    { 77, "NSP", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Economic Affairs Branch", 75 },
                    { 80, "NSP", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Operations & Support Branch", 78 },
                    { 87, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Defense Investments Branch", 78 },
                    { 79, "NSP", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Command, Control, Comms, Computers, & Intelligence Branch", 78 }
                });

            migrationBuilder.InsertData(
                table: "DepartmentMap",
                columns: new[] { "Id", "DepartmentId", "Division", "Office" },
                values: new object[,]
                {
                    { 13, 70, "General Government Programs", "Housing/Treasury/Commerce Division" },
                    { 19, 59, "Health Programs", "Office of the Deputy Associate Director, Health Division" },
                    { 46, 75, "National Security Programs", "International Affairs Division" },
                    { 67, 28, "Office of Fed Financial Mgmt", "Financial Integrity and Risk Management Branch" },
                    { 59, 49, "Natural Resource Programs", "Natural Resources Division" },
                    { 55, 45, "Natural Resource Programs", "Energy/Science/Water Division" },
                    { 68, 29, "Office of Fed Financial Mgmt", "Management Controls and Assistance Branch" },
                    { 70, 89, "Office of Federal Procurement Policy", "Efficiency, Data, and Workforce Management Branch" },
                    { 72, 90, "Office of Federal Procurement Policy", "Policey Development and Innovation Branch" },
                    { 74, 36, "Office Of Information And Regulatory Affairs", "OIRA/ODA/Food, Health, and Labor Branch" },
                    { 75, 37, "Office of Information and Regulatory Affairs", "OIRA/ODA/Information Policy Branch" },
                    { 76, 37, "Office of Information and Regulatory Affairs", "OIRA/ODA/Information Policy Branch O Fund" },
                    { 6, 54, "Education, Income Maintenance and Labor Programs", "Office of the Deputy Associate Director, EIML" },
                    { 77, 38, "Office of Information and Regulatory Affairs", "OIRA/ODA/Natural Resources and Environmental Branch" },
                    { 82, 40, "Office of Information and Regulatory Affairs", "OIRA/ODA/Statistical and Science Policy Branch" },
                    { 83, 41, "Office of Information and Regulatory Affairs", "OIRA/ODA/Transportation and Security Branch" },
                    { 84, 41, "Office of Information and Regulatory Affairs", "OIRA/ODA/Transportation and Security Branch O Fund" },
                    { 34, 12, "Legislative Reference Division", "Economic/Science/General Government Branch" },
                    { 35, 13, "Legislative Reference Division", "Health/Education/Veterans/Social Program Branch" },
                    { 38, 14, "Legislative Reference Division", "Resources/Defense/International Branch" },
                    { 81, 39, "Office of Information and Regulatory Affairs", "OIRA/ODA/Privacy Branch" },
                    { 47, 78, "National Security Programs", "National Security Division" }
                });

            migrationBuilder.InsertData(
                table: "DepartmentMap",
                columns: new[] { "Id", "DepartmentId", "Division", "Office" },
                values: new object[,]
                {
                    { 62, 17, "Office Assistant Director Budget Review", "Budget Analysis Branch" },
                    { 44, 79, "National Security Programs", "Command/Control/Communications/Intelligence Branch" },
                    { 49, 87, "National Security Programs", "Defense Investments Branch" },
                    { 45, 77, "National Security Programs", "Economics Affairs" },
                    { 51, 76, "National Security Programs", "State Branch" },
                    { 9, 73, "General Government Programs", "Commerce Branch" },
                    { 16, 72, "General Government Programs", "Treasury Branch" },
                    { 12, 71, "General Government Programs", "Housing Branch" },
                    { 14, 69, "General Government Programs", "Justice Branch" },
                    { 11, 68, "General Government Programs", "Homeland Security Branch" },
                    { 15, 67, "General Government Programs", "Transportation/GSA Branch" },
                    { 20, 64, "Health Programs", "Health Insurance/Data/Analysis Branch" },
                    { 23, 63, "Health Programs", "Public Health Branch" },
                    { 22, 62, "Health Programs", "Medicare Branch" },
                    { 21, 61, "Health Programs", "Medicaid Branch" },
                    { 17, 60, "Health Programs", "HHS Branch" },
                    { 8, 57, "Education, Income Maintenance and Labor Programs", "Labor Branch" },
                    { 7, 56, "Education, Income Maintenance and Labor Programs", "Income Maintenance Branch" },
                    { 4, 55, "Education, Income Maintenance and Labor Programs", "Education Branch" },
                    { 57, 52, "Natural Resource Programs", "Interior Branch" },
                    { 56, 51, "Natural Resource Programs", "Environment Branch" },
                    { 53, 50, "Natural Resource Programs", "Agriculture Branch" },
                    { 61, 48, "Natural Resource Programs", "Water and Power Branch" },
                    { 60, 47, "Natural Resource Programs", "Science and Space Branch" },
                    { 54, 46, "Natural Resource Programs", "Energy Branch" },
                    { 63, 21, "Office Assistant Director Budget Review", "Budget Concept Branch" },
                    { 65, 20, "Office Assistant Director Budget Review", "Budget Review Branch" },
                    { 66, 18, "Office Assistant Director Budget Review", "Budget Systems Branch" },
                    { 50, 80, "National Security Programs", "Defense Operations, Personnel, and Support Branch" },
                    { 52, 82, "National Security Programs", "Veterans Affairs/Defense Health Branch" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Department_ParentDepartmentId",
                table: "Department",
                column: "ParentDepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_DepartmentMap_DepartmentId",
                table: "DepartmentMap",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Employee_DepartmentId",
                table: "Employee",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Employee_ReportsToEmployeeId",
                table: "Employee",
                column: "ReportsToEmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeAttribute_EmployeeId",
                table: "EmployeeAttribute",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeGroup_EmployeeId",
                table: "EmployeeGroup",
                column: "EmployeeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DepartmentMap");

            migrationBuilder.DropTable(
                name: "EmployeeAttribute");

            migrationBuilder.DropTable(
                name: "EmployeeGroup");

            migrationBuilder.DropTable(
                name: "Employee");

            migrationBuilder.DropTable(
                name: "Department");
        }
    }
}
