module.exports = {

  test: {
    client: 'postgresql',
    connection: {
      filename: './test_agile'
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

  production: {
 client: 'postgresql',
 connection: process.env.DATABASE_URL,
 pool: {
   min: 2,
   max: 10
 },
 migrations: {
   tableName: 'knex_migrations'
 }
}


};