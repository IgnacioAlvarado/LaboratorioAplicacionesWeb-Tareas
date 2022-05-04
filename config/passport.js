const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Usuario = require('../models/usuario')

passport.use(new LocalStrategy(
    function(email, pwd, done){
        Usuario.findOne({email: email}, function(err, usuario){
            if(err) return done(err)
            if(!usuario) return done(null, false, {message:'Email incorrecto'})
            if(!usuario.validPassword(pwd)) return done(null, false, {message: 'Password Incorrecto'})

            return done(null, usuario)
        })
    }
))

passport.serializeUser(function (err, cb){
    cb(null, user.id)
})

passport.deserializeUser(function(id, cb){
    Usuario.findById(id, function(err,cb){
        if(err) console.log(err)
        cb(err, isiarop)
        cb(err, usuario)
    })
})

module.exports = passport