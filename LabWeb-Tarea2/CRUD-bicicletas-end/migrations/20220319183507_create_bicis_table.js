exports.up = function(knex) {
    return knex.schema
      .createTable('bicicleta', (table) => {
        table.increments('id');
        table.string('color', 255).notNullable();
        table.string('modelo', 255).notNullable();
        table.string('ubicacion',255).notNullable();
        table.timestamps(true, true);
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('bicicleta');
  };
