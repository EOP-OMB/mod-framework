using Microsoft.EntityFrameworkCore.Migrations;

namespace Mod.Framework.User.Migrations
{
    public partial class AdditionalEmployeeFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AppointmentType",
                table: "Employee",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EducationLevel",
                table: "Employee",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PayGrade",
                table: "Employee",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PayPlan",
                table: "Employee",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PaySeries",
                table: "Employee",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PayStep",
                table: "Employee",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AppointmentType",
                table: "Employee");

            migrationBuilder.DropColumn(
                name: "EducationLevel",
                table: "Employee");

            migrationBuilder.DropColumn(
                name: "PayGrade",
                table: "Employee");

            migrationBuilder.DropColumn(
                name: "PayPlan",
                table: "Employee");

            migrationBuilder.DropColumn(
                name: "PaySeries",
                table: "Employee");

            migrationBuilder.DropColumn(
                name: "PayStep",
                table: "Employee");
        }
    }
}
