let Usuario = require('../models/usuario')
let Token = require('../models/token')

module.exports = {
    confirmationGet: function(req, res, next){
        Token.findOne({ token: req.params.token }, function(err, token){
            if(!token) return res.status(400).send({ type: 'not-verified', masg: 'No se pudo verificar el token' })
            Usuario.findOneAndUpdate({_id: token._userId}, {$set: { verificado: true}}, {new: true}, (err, doc) => {
                if (err) {
                    return res.status(500).send({msg:err.message})
                }
                res.redirect('/')
            });
        })
    }
}
