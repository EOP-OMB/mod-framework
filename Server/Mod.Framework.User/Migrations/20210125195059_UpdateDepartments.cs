using Microsoft.EntityFrameworkCore.Migrations;

namespace Mod.Framework.User.Migrations
{
    public partial class UpdateDepartments : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 4,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 12,
                column: "Abbreviation",
                value: "ESGG");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 13,
                column: "Abbreviation",
                value: "HEVS");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 14,
                column: "Abbreviation",
                value: "RDI");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 28,
                column: "Abbreviation",
                value: "FIRM");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 29,
                column: "Abbreviation",
                value: "MCAB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 36,
                column: "Abbreviation",
                value: "FHLB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 37,
                column: "Abbreviation",
                value: "IPB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 38,
                column: "Abbreviation",
                value: "NREB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 39,
                column: "Abbreviation",
                value: "Privacy");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 40,
                column: "Abbreviation",
                value: "SSP");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 41,
                column: "Abbreviation",
                value: "TSB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 44,
                column: "Abbreviation",
                value: "NRP");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 45,
                column: "Abbreviation",
                value: "ESWD");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 46,
                column: "Abbreviation",
                value: "EB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 47,
                column: "Abbreviation",
                value: "SSB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 48,
                column: "Abbreviation",
                value: "WPB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 49,
                column: "Abbreviation",
                value: "NRD");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 50,
                column: "Abbreviation",
                value: "AB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 51,
                column: "Abbreviation",
                value: "EB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 52,
                column: "Abbreviation",
                value: "IB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 58,
                column: "Abbreviation",
                value: "Health");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 59,
                column: "Abbreviation",
                value: "HD");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 60,
                column: "Abbreviation",
                value: "HHS");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 61,
                column: "Abbreviation",
                value: "Medicain");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 62,
                column: "Abbreviation",
                value: "Medicain");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 63,
                column: "Abbreviation",
                value: "PHB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 64,
                column: "AdSecurityGroup",
                value: "HIDA");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 65,
                column: "Abbreviation",
                value: "GGP");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 66,
                column: "Abbreviation",
                value: "THJS");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 67,
                column: "Abbreviation",
                value: "TGB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 68,
                column: "Abbreviation",
                value: "HSB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 69,
                column: "Abbreviation",
                value: "Justice");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 70,
                column: "Abbreviation",
                value: "HTC");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 71,
                columns: new[] { "Abbreviation", "ParentDepartmentId" },
                values: new object[] { "Housing", 70 });

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 72,
                columns: new[] { "Abbreviation", "ParentDepartmentId" },
                values: new object[] { "Treasury", 70 });

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 73,
                columns: new[] { "Abbreviation", "ParentDepartmentId" },
                values: new object[] { "Commerce", 70 });

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 75,
                column: "Abbreviation",
                value: "IAD");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 76,
                column: "Abbreviation",
                value: "State");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 77,
                column: "Abbreviation",
                value: "EAB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 78,
                column: "Abbreviation",
                value: "NSD");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 80,
                column: "Name",
                value: "Defense Operations Branch");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 90,
                column: "Abbreviation",
                value: "PDI");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 4,
                column: "Abbreviation",
                value: "SO");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 12,
                column: "Abbreviation",
                value: "LRD");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 13,
                column: "Abbreviation",
                value: "LRD");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 14,
                column: "Abbreviation",
                value: "LRD");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 28,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 29,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 36,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 37,
                column: "Abbreviation",
                value: "OIRA");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 38,
                column: "Abbreviation",
                value: "OIRA");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 39,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 40,
                column: "Abbreviation",
                value: "OIRA");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 41,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 44,
                column: "Abbreviation",
                value: "FA");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 45,
                column: "Abbreviation",
                value: "FB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 46,
                column: "Abbreviation",
                value: "FBA");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 47,
                column: "Abbreviation",
                value: "FBB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 48,
                column: "Abbreviation",
                value: "FBC");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 49,
                column: "Abbreviation",
                value: "FC");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 50,
                column: "Abbreviation",
                value: "FCA");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 51,
                column: "Abbreviation",
                value: "FCB");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 52,
                column: "Abbreviation",
                value: "FCC");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 58,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 59,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 60,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 61,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 62,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 63,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 64,
                column: "AdSecurityGroup",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 65,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 66,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 67,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 68,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 69,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 70,
                column: "Abbreviation",
                value: "");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 71,
                columns: new[] { "Abbreviation", "ParentDepartmentId" },
                values: new object[] { "", 66 });

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 72,
                columns: new[] { "Abbreviation", "ParentDepartmentId" },
                values: new object[] { "", 66 });

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 73,
                columns: new[] { "Abbreviation", "ParentDepartmentId" },
                values: new object[] { "", 66 });

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 75,
                column: "Abbreviation",
                value: "NSP");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 76,
                column: "Abbreviation",
                value: "NSP");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 77,
                column: "Abbreviation",
                value: "NSP");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 78,
                column: "Abbreviation",
                value: "NSP");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 80,
                column: "Name",
                value: "Operations & Support Branch");

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 90,
                column: "Abbreviation",
                value: "");
        }
    }
}
