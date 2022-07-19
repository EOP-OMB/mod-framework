using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Mod.Framework.User.Migrations
{
    public partial class AddedDeputyDirectorAndDDMUpdatedMapping : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Department",
                columns: new[] { "Id", "Abbreviation", "AdSecurityGroup", "CreatedBy", "CreatedTime", "DeletedBy", "DeletedTime", "InternalOrgId", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "ParentDepartmentId" },
                values: new object[] { 2, "DD", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Deputy Director", null });

            migrationBuilder.InsertData(
                table: "Department",
                columns: new[] { "Id", "Abbreviation", "AdSecurityGroup", "CreatedBy", "CreatedTime", "DeletedBy", "DeletedTime", "InternalOrgId", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "ParentDepartmentId" },
                values: new object[] { 3, "DDM", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Deputy Director for Management", null });

            migrationBuilder.UpdateData(
                table: "DepartmentMap",
                keyColumn: "Id",
                keyValue: 1,
                column: "DepartmentId",
                value: 3);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "DepartmentMap",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.InsertData(
                table: "DepartmentMap",
                columns: new[] { "Id", "DepartmentId", "Division", "Office" },
                values: new object[] { 1, 1, "Directors Office", "Deputy Director for Management's Office (DD/M)" });
        }
    }
}
