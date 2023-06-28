import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  host: process.env.DATABASE_HOST,
  type: 'mysql',
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  logging: true,
  entities: ['dist/**/*.model{ .ts,.js}'],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
  migrationsRun: true,
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
