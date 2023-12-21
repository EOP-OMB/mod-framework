using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Mod.Framework.User.Migrations
{
    public partial class AnnualSalary : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AnnualSalary",
                table: "Employee",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AnnualSalary",
                table: "Employee");
        }
    }
}
