
exports.up = function (knex) {
    return knex.schema.createTable('tasks', table => {
        table.increments('id').primary()
        table.string('desc').notNull()
        table.dateTime('estimateAt')
        table.dateTime('doneAt')
        table.integer('userId').unsigned().references('id').inTable('users')
            .notNull().onDelete('cascade');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('tasks')
};
