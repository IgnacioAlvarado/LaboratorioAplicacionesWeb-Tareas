const Bicicleta = require('../models/bicicleta')

exports.bicicleta_list = function(req, res){
    Bicicleta.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let cletas = data;
      // Enviamos los datos a la vista
      res.render('bicicletas/index', { bicis: cletas });
    });
}

exports.bicicleta_create_get = function(req, res){
    res.render('bicicletas/create')
}

exports.bicicleta_create_post = function(req, res){
    let bici = {
        color: req.body.color,
        modelo: req.body.modelo,
        ubicacion: req.body.ubicacion
      };
      // Crea el producto
      Bicicleta.create(bici)
        .then((id) => {
          // Al finalizar la creación, reenvía al usuario a la página
          // inicial
          res.redirect('/bicicletas');
        });
} 

exports.bicicleta_delete_post = function(req, res){
    /*Bicicleta.removeById(req.params.id) 
    res.redirect('/bicicletas')*/
    // Obtiene el id que viene en la url
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    Bicicleta.find(id).then((bici) => {
    // Si el producto no existe entonces
    if (bici == null) {
      // Regresa el error 404
      res.status(404).send('Not found');
      return;
    }
    // Elimina los datos del producto
    Bicicleta.delete(bici.id)
      .then((id) => {
        // Al terminar redirige el índice
        res.redirect('/bicicletas');
      });
    });
}

exports.bicicleta_update_get = function(req, res){
    /*let bici = Bicicleta.findById(req.params.id)
    res.render('bicicletas/update', {bici})*/
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    Bicicleta.find(id).then((bici) => {
    // Si el producto no existe entonces
    if (bici == null) {
      // Regresa el error 404
      res.status(404).send('Not found');
      return;
    }
    // Si el producto existe entonces muestra la vista products/edit.hbs
    // con la información del producto
    res.render('bicicletas/update', {bici});
    });
}

exports.bicicleta_update_post = function(req, res){
    /*let bici = Bicicleta.findById(req.body.id)
    bici.id = req.body.id
    bici.color = req.body.color
    bici.modelo = req.body.modelo
    bici.ubicacion = [req.body.lat, req.body.lon]

    res.redirect('/bicicletas')*/

    // Obtiene el id que viene en la url
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    Bicicleta.find(id).then((bici) => {
    // Si el producto no existe entonces
    if (bici == null) {
      // Regresa el error 404
      res.status(404).send('Not found');
      return;
    }

    // Define los datos del producto actualizado
    let updateBici = {
      color: req.body.color,
      modelo: req.body.modelo,
      ubicacion: req.body.ubicacion
    }

    // Actualiza los datos del producto
    Bicicleta.update(bici.id, updateBici)
      .then((id) => {
        // Al terminar redirige el índice
        res.redirect('/bicicletas');
      });
    });
}