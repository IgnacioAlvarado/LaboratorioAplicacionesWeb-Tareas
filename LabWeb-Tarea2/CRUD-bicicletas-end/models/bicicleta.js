// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.factory = (color, modelo, ubicacion) => {
  return {
    color:color,
    modelo:modelo,
    ubicacion:ubicacion
  }
}

// Obtiene todos los productos en la base
exports.all = () => {
  // Realiza la consulta dentro de knex
  return knex
    .select('*')
    .from('bicicleta');
}

// Almacen en la base de datos el producto
exports.create = (bici) => {
  return knex('bicicleta')
    .insert({
      color:bici.color,
      modelo:bici.modelo,
      ubicacion:bici.ubicacion
    });
}

// Obtiene la información de un producto por su id
exports.find = (id) => {
  return knex
    .select('*')
    .from('bicicleta')
    .where('id', id)
    .first();
}

// Actualiza el producto con el id dado con la información definida en product
exports.update = (id, bici) => {
  return knex('bicicleta')
    .update(bici)
    .update('updated_at', knex.fn.now())
    .where('id', id);
}

// Elimina el producto con el id dado
exports.delete = (id) => {
  return knex('bicicleta')
    .delete()
    .where('id', id);
}