/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('meal', (table) => {
        table.increments('id').primary();
        table.text('name').notNullable();
        table.text('descriptiom').notNullable();
        table.timestamp('date_time').notNullable();
        table.boolean('compliant').notNullable;
        table.created_at('date_time').defalutTo(knex.fn.now()).notNullable();

    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('meal');
};
