// import { env } from './env' fazer este env funcionar

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/app.db', // env.DATABASE_URL, ARRUMAR ISSO AQUI
    },
    useNullAsDefault: true,
    migrations: {
      extension: 'cjs',
      directory: './db/migrations',
    },
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './db/test.db', // env.DATABASE_URL, ARRUMAR ISSO AQUI
    },
    useNullAsDefault: true,
    migrations: {
      extension: 'cjs',
      directory: './db/migrations',
    },
  },
}
