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
      tbl
        .integer('users_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    .createTable("foods", tbl => {
      tbl.increments();

      tbl.string("name", 128).notNullable();
      tbl.integer("serving_size").notNullable();
      tbl
        .integer("category_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("categories")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("categories", tbl => {
      tbl.increments();

      tbl.string("name", 20);
    })
    .createTable("meals", tbl => {
        tbl.increments()

        tbl.string("meal_type")
    })
    .createTable("kids_foods", tbl => {
      tbl.increments();

      tbl
        .integer("kids_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("kids")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("foods_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("foods")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("meals_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("meals")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        
      tbl.date("date").notNullable();

      tbl.integer("servings").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("kids_foods")
    .dropTableIfExists("meals")
    .dropTableIfExists("categories")
    .dropTableIfExists("foods")
    .dropTableIfExists("kids")
    .dropTableIfExists("users");
};
