// import { env } from './env' fazer este env funcionar

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/app.db', // env.DATABASE_URL,
    },
    useNullAsDefault: true,
    migrations: {
      extension: 'cjs',
      directory: './db/migrations',
    },
  },
}
