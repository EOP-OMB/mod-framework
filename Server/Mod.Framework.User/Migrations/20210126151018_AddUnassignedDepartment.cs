using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Mod.Framework.User.Migrations
{
    public partial class AddUnassignedDepartment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Department",
                columns: new[] { "Id", "Abbreviation", "AdSecurityGroup", "CreatedBy", "CreatedTime", "DeletedBy", "DeletedTime", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "ParentDepartmentId" },
                values: new object[] { 91, "", "", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Unassigned", 91 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Department",
                keyColumn: "Id",
                keyValue: 91);
        }
    }
}
