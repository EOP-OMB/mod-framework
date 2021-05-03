using Microsoft.EntityFrameworkCore.Migrations;

namespace Mod.Framework.User.Migrations
{
    public partial class AddedInternalOrg : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "InternalOrgId",
                table: "Department",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "InternalOrg",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(nullable: true),
                    Abbreviation = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InternalOrg", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Department_InternalOrgId",
                table: "Department",
                column: "InternalOrgId");

            migrationBuilder.AddForeignKey(
                name: "FK_Department_InternalOrg_InternalOrgId",
                table: "Department",
                column: "InternalOrgId",
                principalTable: "InternalOrg",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Department_InternalOrg_InternalOrgId",
                table: "Department");

            migrationBuilder.DropTable(
                name: "InternalOrg");

            migrationBuilder.DropIndex(
                name: "IX_Department_InternalOrgId",
                table: "Department");

            migrationBuilder.DropColumn(
                name: "InternalOrgId",
                table: "Department");
        }
    }
}
