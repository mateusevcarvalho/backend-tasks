// Update with your config settings.

module.exports = {

  client: 'mysql',
  connection: {
    user: 'root',
    password: 'root',
    database: 'tasks'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};
