import { MigrationInterface, QueryRunner } from "typeorm";

export class EliminandoEmail_USUARIOS1761508568701 implements MigrationInterface {
    name = 'EliminandoEmail_USUARIOS1761508568701'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

}
