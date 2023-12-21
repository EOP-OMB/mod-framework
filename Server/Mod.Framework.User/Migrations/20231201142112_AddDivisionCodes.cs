using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Mod.Framework.User.Migrations
{
    /// <inheritdoc />
    public partial class AddDivisionCodes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DivisionCode",
                table: "Employee",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DivisionCodeName",
                table: "Employee",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DivisionCode",
                table: "Employee");

            migrationBuilder.DropColumn(
                name: "DivisionCodeName",
                table: "Employee");
        }
    }
}
