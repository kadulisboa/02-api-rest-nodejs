import { Knex, knex as setupKnex } from 'knex';
import { env } from './env';

const connectionUrl =
  env.DATABASE_CLIENT === 'sqlite'
    ? {
        filename: env.DATABASE_URL,
      }
    : env.DATABASE_URL;

export const config: Knex.Config = {
  client: 'sqlite',
  connection: connectionUrl,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
};

export const knex = setupKnex(config);
