exports.up = function(knex, Promise) {
  let d = new Date()
  return Promise.all([
    knex.schema.createTable('items', table => {
      table.increments();
      table.string('name')
       .notNullable()
      table.boolean('complete')
       .notNullable()
       .defaultTo(false)
    })

  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('items')
  ])
};
