import {
  MigrationInterface,
  QueryRunner,
  Table,
  UpdateQueryBuilder,
} from 'typeorm';
import { Query } from 'typeorm/driver/Query';

export class CreateDespesas1623974276089 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'despesas',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'data_compra',
            type: 'varchar',
          },
          {
            name: 'local_compra',
            type: 'varchar',
          },
          {
            name: 'valor',
            type: 'number',
          },
          {
            name: 'responsavel_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'Responsavel',
            referencedTableName: 'responsaveis',
            referencedColumnNames: ['id'],
            columnNames: ['responsavel_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('despesas');
  }
}
