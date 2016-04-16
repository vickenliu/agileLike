module.exports = {

  test: {
    client: 'sqlite3',
    connection: {
      filename: './test.sqlite3'
    },
    useNullAsDefault: true
  },
  development: {
    client: 'postgresql',
    connection: {
      filename: './dev_agile'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: process.env.DATABASE_URL

};