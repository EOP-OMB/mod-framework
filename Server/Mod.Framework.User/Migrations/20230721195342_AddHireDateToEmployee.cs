using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Mod.Framework.User.Migrations
{
    public partial class AddHireDateToEmployee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "HireDate",
                table: "Employee",
                type: "datetime2",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HireDate",
                table: "Employee");
        }
    }
}
