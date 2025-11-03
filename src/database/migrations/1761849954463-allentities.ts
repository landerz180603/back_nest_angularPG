import { MigrationInterface, QueryRunner } from "typeorm";

export class Allentities1761849954463 implements MigrationInterface {
    name = 'Allentities1761849954463'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido" ADD "clienteId" integer`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD CONSTRAINT "FK_2730a0c3947641edf256551f10c" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido" DROP CONSTRAINT "FK_2730a0c3947641edf256551f10c"`);
        await queryRunner.query(`ALTER TABLE "pedido" DROP COLUMN "clienteId"`);
    }

}
