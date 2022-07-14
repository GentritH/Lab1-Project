using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class InitialCreat : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Premte",
                table: "Oraret",
                newName: "Premte6");

            migrationBuilder.RenameColumn(
                name: "Merkure",
                table: "Oraret",
                newName: "Premte5");

            migrationBuilder.RenameColumn(
                name: "Marte",
                table: "Oraret",
                newName: "Premte4");

            migrationBuilder.RenameColumn(
                name: "Hene",
                table: "Oraret",
                newName: "Premte3");

            migrationBuilder.RenameColumn(
                name: "Enjte",
                table: "Oraret",
                newName: "Premte2");

            migrationBuilder.AddColumn<string>(
                name: "Enjte1",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Enjte2",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Enjte3",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Enjte4",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Enjte5",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Enjte6",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Hene1",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Hene2",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Hene3",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Hene4",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Hene5",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Hene6",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Marte1",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Marte2",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Marte3",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Marte4",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Marte5",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Marte6",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Merkure1",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Merkure2",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Merkure3",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Merkure4",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Merkure5",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Merkure6",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Premte1",
                table: "Oraret",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Enjte1",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Enjte2",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Enjte3",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Enjte4",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Enjte5",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Enjte6",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Hene1",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Hene2",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Hene3",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Hene4",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Hene5",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Hene6",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Marte1",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Marte2",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Marte3",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Marte4",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Marte5",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Marte6",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Merkure1",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Merkure2",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Merkure3",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Merkure4",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Merkure5",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Merkure6",
                table: "Oraret");

            migrationBuilder.DropColumn(
                name: "Premte1",
                table: "Oraret");

            migrationBuilder.RenameColumn(
                name: "Premte6",
                table: "Oraret",
                newName: "Premte");

            migrationBuilder.RenameColumn(
                name: "Premte5",
                table: "Oraret",
                newName: "Merkure");

            migrationBuilder.RenameColumn(
                name: "Premte4",
                table: "Oraret",
                newName: "Marte");

            migrationBuilder.RenameColumn(
                name: "Premte3",
                table: "Oraret",
                newName: "Hene");

            migrationBuilder.RenameColumn(
                name: "Premte2",
                table: "Oraret",
                newName: "Enjte");
        }
    }
}
