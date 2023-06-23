import { MigrationInterface, QueryRunner } from "typeorm";

export class AuthenticationCodesNullableTypeMigration1687476460784 implements MigrationInterface {
    name = 'AuthenticationCodesNullableTypeMigration1687476460784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`authentication_codes\` CHANGE \`code\` \`code\` longtext NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`authentication_codes\` CHANGE \`code\` \`code\` longtext NOT NULL`);
    }

}
