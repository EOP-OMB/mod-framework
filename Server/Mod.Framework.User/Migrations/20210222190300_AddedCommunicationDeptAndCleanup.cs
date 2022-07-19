using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Mod.Framework.User.Migrations
{
    public partial class AddedCommunicationDeptAndCleanup : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 21,
                column: "Name",
                value: "Budget Concepts Branch");

            migrationBuilder.InsertData(
                table: "Department",
                columns: new[] { "Id", "Abbreviation", "AdSecurityGroup", "CreatedBy", "CreatedTime", "DeletedBy", "DeletedTime", "InternalOrgId", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "ParentDepartmentId" },
                values: new object[] { 93, "COMM", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, 7, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Communications", 5 });

            migrationBuilder.InsertData(
                table: "DepartmentMap",
                columns: new[] { "Id", "DepartmentId", "Division", "Office" },
                values: new object[] { 92, 90, "Office of Federal Procurement Policy", "Policy Development and Innovation Branch" });

            migrationBuilder.UpdateData(
                table: "DepartmentMap",
                keyColumn: "Id",
                keyValue: 91,
                column: "DepartmentId",
                value: 93);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "DepartmentMap",
                keyColumn: "Id",
                keyValue: 91);

            migrationBuilder.DeleteData(
                table: "DepartmentMap",
                keyColumn: "Id",
                keyValue: 92);

            migrationBuilder.DeleteData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 93);

            migrationBuilder.UpdateData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 21,
                column: "Name",
                value: "Budget Concept Branch");

            migrationBuilder.InsertData(
                table: "DepartmentMap",
                columns: new[] { "Id", "DepartmentId", "Division", "Office" },
                values: new object[] { 91, 1, "Staff Offices", "Communications" });
        }
    }
}
