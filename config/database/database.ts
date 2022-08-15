import 'dotenv/config';
import { DataSource } from "typeorm"
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const Database = new DataSource({
  type: "postgres",
  host:process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: true,
  migrations: ['./config/database/migrations/*.ts'],
  entities: ['./app/models/*.ts'],
  namingStrategy: new SnakeNamingStrategy(),
})
