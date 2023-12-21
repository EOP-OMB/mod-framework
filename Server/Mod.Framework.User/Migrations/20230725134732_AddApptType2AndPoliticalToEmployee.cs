using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Mod.Framework.User.Migrations
{
    public partial class AddApptType2AndPoliticalToEmployee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AppointmentType2",
                table: "Employee",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Political",
                table: "Employee",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AppointmentType2",
                table: "Employee");

            migrationBuilder.DropColumn(
                name: "Political",
                table: "Employee");
        }
    }
}
