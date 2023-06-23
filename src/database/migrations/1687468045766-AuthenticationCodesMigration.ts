import { MigrationInterface, QueryRunner } from "typeorm";

export class AuthenticationCodesMigration1687468045766 implements MigrationInterface {
    name = 'AuthenticationCodesMigration1687468045766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`authentication_codes\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` varchar(255) NOT NULL, \`code\` varchar(255) NOT NULL, \`token\` longtext NULL, \`userId\` int NULL, \`idToken\` longtext NULL, \`refreshToken\` longtext NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`authentication_codes\` ADD CONSTRAINT \`FK_e3479c7bde0fe7dc0a3780a3cd5\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`authentication_codes\` DROP FOREIGN KEY \`FK_e3479c7bde0fe7dc0a3780a3cd5\``);
        await queryRunner.query(`DROP TABLE \`authentication_codes\``);
    }

}
