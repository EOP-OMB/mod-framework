using Microsoft.EntityFrameworkCore.Migrations;

namespace Mod.Framework.User.Migrations
{
    public partial class AddedInternalOrg : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "InternalOrgId",
                table: "Department",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "InternalOrg",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(nullable: true),
                    Abbreviation = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InternalOrg", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "InternalOrg",
                columns: new[] { "Id", "Abbreviation", "Code", "Description" },
                values: new object[,]
                {
                    { 1, "MOD", "OMB0102000000", "Management and Operations Division" },
                    { 33, "HEALTH", "OMB0305000000", "Health Programs - Associate Director" },
                    { 34, "HEALTH", "OMB0305010000", "Health Division" },
                    { 7, "COMM", "OMB0104000000", "Communications" },
                    { 15, "GGP", "OMB0302000000", "Associate Director, General Government Program" },
                    { 17, "NRP", "OMB0301000000", "Associate Director, Natural Resource Program" },
                    { 25, "CA", "OMB0401000000", "Central Fund" },
                    { 26, "BSB", "OMB0501000000", "MAX Budget Systems" },
                    { 27, "BSB", "OMB0502000000", "Modeling, Analysis, Photocomposition Systems" },
                    { 28, "IPEC", "OMB0101010000", "Intellectual Property Enforcement Coordinator" },
                    { 35, "ITOR", "SPE0501000000", "ITOR-CIO" },
                    { 36, "ITOR", "SPE0502000000", "ITOR-E-Gov DAD" },
                    { 37, "ITOR", "SPE0503000000", "ITOR-Cyber Security" },
                    { 38, "ITOR", "SPE0504000000", "ITOR-Policy-Budget-Comms" },
                    { 39, "ITOR", "SPE0505000000", "ITOR-Oversight and Analytics" },
                    { 40, "ITOR", "SPE0506000000", "ITOR-General Counsel" },
                    { 41, "ITOR", "SPE0507000000", "ITOR-Admin Services" },
                    { 42, "ITOR", "SPE0508000000", "ITOR-Procurement" },
                    { 43, "DDI", "SPE0300000000", "DDI Account Fund" },
                    { 44, "OIT", "OMB0503000000", "Office of Information Technology" },
                    { 32, "GGP", "OMB0302020000", "Transportation, Homeland, Justice, and Services Division" },
                    { 31, "PPM", "OMB0109000000", "Performance and Personnel Management" },
                    { 30, "BCB", "OMB0103020200", "Budget Concepts Branch" },
                    { 29, "ITOR", "SPE0400000000", "ITOR-USDS" },
                    { 2, "DO", "OMB0101000000", "Directors Office" },
                    { 3, "BRD", "OMB0103000000", "Associate Director, Budget Review Division" },
                    { 4, "BAB", "OMB0103010100", "Budget Analysis Branch" },
                    { 5, "BRB", "OMB0103020100", "Budget Review Branch" },
                    { 6, "BSB", "OMB0103010200", "Budget Systems Branch" },
                    { 8, "EP", "OMB0105000000", "Economic Policy" },
                    { 9, "GC", "OMB0106000000", "General Counsel" },
                    { 10, "LA", "OMB0107000000", "Legislative Affairs" },
                    { 11, "LRD", "OMB0108000000", "Legislative Reference Division" },
                    { 45, "OSS", "OMB0401000000", "Office of Support Services" },
                    { 12, "NSP", "OMB0303000000", "Associate Director, National Security Program" },
                    { 14, "NSD", "OMB0303020000", "National Security Division" },
                    { 16, "GGP", "OMB0302010000", "Housing, Treasury, and Commerce Division" },
                    { 18, "ESW", "OMB0301010000", "Energy/Science/Water Division" },
                    { 19, "NRD", "OMB0301020000", "Natural Resources Division" },
                    { 20, "EIML", "OMB0304000000", "Education, Income Maintenance, and Labor - Assoc Dir" },
                    { 21, "EIML", "OMB0304010000", "Education, Income Maintenance, and Labor Division" },
                    { 22, "OFFM", "OMB0201000000", "Office of Federal Financial Management" },
                    { 23, "OFPP", "OMB0202000000", "Office of Federal Procurement Policy" },
                    { 24, "OIRA", "OMB0203000000", "Office of Information and Regulatory Affairs" },
                    { 13, "IAD", "OMB0303010000", "International Affairs Division" },
                    { 46, "OBFT", "OMB0401000000", "Office of Budget, Financial and Travel Management" }
                });

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 1,
                column: "InternalOrgId",
                value: 2);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 6,
                column: "InternalOrgId",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 8,
                column: "InternalOrgId",
                value: 1);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 9,
                column: "InternalOrgId",
                value: 9);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 10,
                column: "InternalOrgId",
                value: 8);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 11,
                column: "InternalOrgId",
                value: 11);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 15,
                column: "InternalOrgId",
                value: 3);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 17,
                column: "InternalOrgId",
                value: 4);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 18,
                column: "InternalOrgId",
                value: 6);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 20,
                column: "InternalOrgId",
                value: 5);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 21,
                column: "InternalOrgId",
                value: 30);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 22,
                column: "InternalOrgId",
                value: 31);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 25,
                column: "InternalOrgId",
                value: 29);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 27,
                column: "InternalOrgId",
                value: 22);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 30,
                column: "InternalOrgId",
                value: 23);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 35,
                column: "InternalOrgId",
                value: 24);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 45,
                column: "InternalOrgId",
                value: 18);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 49,
                column: "InternalOrgId",
                value: 19);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 53,
                column: "InternalOrgId",
                value: 20);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 54,
                column: "InternalOrgId",
                value: 21);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 58,
                column: "InternalOrgId",
                value: 33);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 59,
                column: "InternalOrgId",
                value: 34);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 66,
                column: "InternalOrgId",
                value: 32);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 70,
                column: "InternalOrgId",
                value: 16);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 74,
                column: "InternalOrgId",
                value: 12);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 75,
                column: "InternalOrgId",
                value: 13);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 78,
                column: "InternalOrgId",
                value: 14);

            migrationBuilder.CreateIndex(
                name: "IX_Department_InternalOrgId",
                table: "Department",
                column: "InternalOrgId");

            migrationBuilder.AddForeignKey(
                name: "FK_Department_InternalOrg_InternalOrgId",
                table: "Department",
                column: "InternalOrgId",
                principalTable: "InternalOrg",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Department_InternalOrg_InternalOrgId",
                table: "Department");

            migrationBuilder.DropTable(
                name: "InternalOrg");

            migrationBuilder.DropIndex(
                name: "IX_Department_InternalOrgId",
                table: "Department");

            migrationBuilder.DropColumn(
                name: "InternalOrgId",
                table: "Department");
        }
    }
}
