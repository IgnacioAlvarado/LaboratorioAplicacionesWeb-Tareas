var express = require('express');
const { ConsoleReporter } = require('jasmine');
const passport = require('passport');
var router = express.Router();
let usuariosController = require('../controllers/usuarios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Log in
router.get('/login', function(req, res, next){
  res.render('session/login');
});

router.post('/login', usuariosController.login);

//Log Out
router.get('/logout', function(req, res, next){
  req.logOut
  res.redirect('/');
});

module.exports = router;
