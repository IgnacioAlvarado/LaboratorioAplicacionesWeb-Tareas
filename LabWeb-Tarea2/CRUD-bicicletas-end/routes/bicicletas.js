var express = require('express');
var router = express.Router();
let bicicletaController = require('../controllers/bicicleta')

//Listar las bicicletas
router.get('/', bicicletaController.bicicleta_list);

//Añadir nueva bicicleta
router.get('/create', bicicletaController.bicicleta_create_get)
router.post('/create', bicicletaController.bicicleta_create_post)

//Eliminar bici
router.delete('/:id', bicicletaController.bicicleta_delete_post)

//Update bici
router.get('/:id/update', bicicletaController.bicicleta_update_get)
router.put('/:id', bicicletaController.bicicleta_update_post);

//router put



module.exports = router;
