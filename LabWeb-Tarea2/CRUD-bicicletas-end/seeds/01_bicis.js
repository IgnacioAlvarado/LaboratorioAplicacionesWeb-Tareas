/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('bicicleta').del()
  await knex('bicicleta').insert([
    {color: 'rojo', modelo: 'bmx', ubicacion:'19.284770,-99.137290'},
    {color: 'blanca', modelo: 'bmx', ubicacion:'19.286055,-99.136991'}
  ]);
};

/* 
table.increments('id');
table.string('color', 255).notNullable();
table.string('modelo', 255).notNullable();
table.string('ubicacion',255).notNullable();
table.timestamps(true, true);

let b1 = new Bicicleta(1, 'rojo', 'bmx', [19.284770943610578, -99.13729060406136])
let b2 = new Bicicleta(2, 'blanca', 'Benotto', [19.286055116801744, -99.1369912899661])
*/