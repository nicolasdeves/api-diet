/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('meal', (table) => {
        table.increments('id').primary();
        table.text('name').notNullable();
        table.text('description').notNullable();
        table.boolean('compliant').notNullable;
        table.integer('userId').unsigned().notNullable();
        table.uuid('sessionId').unsigned();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();

        table
            .foreign('userId')
            .references('id')
            .inTable('user')
            .onDelete('CASCADE')
            
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('meal');
};
