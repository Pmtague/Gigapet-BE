exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();

      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl.string("password", 128).notNullable();
    })
    .createTable("kids", tbl => {
      tbl.increments();

      tbl.string("name", 128).notNullable();
      tbl.string("age", 128).notNullable();
      tbl.string("weight", 8);
    })
    .createTable("foods", tbl => {
        tbl.increments()

        tbl.string("name", 128).notNullable()
        tbl.integer("servings").notNullable()
    })
};

exports.down = function(knex) {};
