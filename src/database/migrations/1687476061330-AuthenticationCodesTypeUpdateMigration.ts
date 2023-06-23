import { MigrationInterface, QueryRunner } from "typeorm";

export class AuthenticationCodesTypeUpdateMigration1687476061330 implements MigrationInterface {
    name = 'AuthenticationCodesTypeUpdateMigration1687476061330'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`authentication_codes\` DROP COLUMN \`code\``);
        await queryRunner.query(`ALTER TABLE \`authentication_codes\` ADD \`code\` longtext NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`authentication_codes\` DROP COLUMN \`code\``);
        await queryRunner.query(`ALTER TABLE \`authentication_codes\` ADD \`code\` varchar(255) NOT NULL`);
    }

}
