import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  host: 'localhost',
  type: 'mysql',
  port: Number(3306),
  username: 'root',
  password: 'p4ssw0rd',
  database: 'factu_fazil_dashboard_test',
  logging: true,
  entities: ['dist/**/*.model{ .ts,.js}'],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
  migrationsRun: true,
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
