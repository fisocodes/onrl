import { config } from "dotenv";

config();

import { DataSource } from "typeorm";

export default new DataSource({
  database: process.env.DATABASE_NAME,
  entities: ["src/**/*.entity.ts"],
  host: process.env.DATABASE_HOST,
  migrations: ["src/database/migrations/**/*{.js,.ts}"],
  migrationsRun: false,
  migrationsTableName: "migrations",
  migrationsTransactionMode: "all",
  password: process.env.DATABASE_PASSWORD,
  port: Number.parseInt(process.env.DATABASE_PORT ?? "5432", 10),
  synchronize: false,
  type: "postgres",
  username: process.env.DATABASE_USERNAME,
});
