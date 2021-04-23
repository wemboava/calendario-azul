import { TimeCourse } from "@modules/routines/infra/typeorm/entities/Routine";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateRoutine1616907619125 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "routines",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: "user_id",
            type: "int",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "date",
            type: "date",
          },
          {
            name: "start_time",
            type: "time",
          },
          {
            name: "end_time",
            type: "time",
          },
          {
            name: "end_date",
            type: "date",
          },
          {
            name: "time_course",
            type: "enum",
            enum: ['daily', 'weekly', 'monthly', 'yearly'],
            isNullable: true,
          },
          {
            name: "image",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "deleted_at",
            type: "timestamp",
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "routines",
      new TableForeignKey({
        name: "routineUser",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("routines", "routineUser");
    await queryRunner.dropTable("routines");
  }
}
