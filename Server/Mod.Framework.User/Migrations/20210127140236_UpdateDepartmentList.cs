using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Mod.Framework.User.Migrations
{
    public partial class UpdateDepartmentList : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 44,
                columns: new[] { "Abbreviation", "Name" },
                values: new object[] { "CEES", "Climate, Energy, Environment & Science" });

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 65,
                columns: new[] { "Abbreviation", "Name" },
                values: new object[] { "THSJSP", "Transportation, Homeland Security, Justice, & Services Programs" });

            migrationBuilder.InsertData(
                table: "Department",
                columns: new[] { "Id", "Abbreviation", "AdSecurityGroup", "CreatedBy", "CreatedTime", "DeletedBy", "DeletedTime", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "ParentDepartmentId" },
                values: new object[] { 92, "THSJSP", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Housing, Treasury, & Commerce Programs", 43 });

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 70,
                column: "ParentDepartmentId",
                value: 92);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 92);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 70,
                column: "ParentDepartmentId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 44,
                columns: new[] { "Abbreviation", "Name" },
                values: new object[] { "NRP", "Natural Resource Programs" });

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 65,
                columns: new[] { "Abbreviation", "Name" },
                values: new object[] { "GGP", "General Government Programs" });

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 70,
                column: "ParentDepartmentId",
                value: 65);
        }
    }
}
