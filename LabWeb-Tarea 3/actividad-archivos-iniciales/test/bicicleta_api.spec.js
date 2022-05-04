const expect = require('chai').expect
const mongoose = require('mongoose')
const Bicicleta = require('../models/bicicleta')
const request = require('request')

let base_url = 'http://localhost:3000/api/bicicletas/'

describe('Bicicletas API', () => {

    beforeEach(function(done){
        var mongoDB = 'mongodb://localhost:27017/test'
        mongoose.connect(mongoDB, {useNewUrlParser: true})

        const db = mongoose.connection
        db.on('error', console.error.bind(console, 'connection error'))
        db.once('open', function(){
            //console.log('Connected to the test database')
            done()
        })
    })

    afterEach(function(done){
        Bicicleta.deleteMany({}, function(err, success){
            if(err) console.log(err)
            const db = mongoose.connection
            db.close()
            done()
        })
    })

    describe('GET BICICLETAS /', () => {
        it('Status 200', (done) => {
            request.get(base_url, function(error, response, body) {
                let res = JSON.parse(body)
                expect(response.statusCode).to.equal(200)
                let bicis_num = Object.keys(res).length;
                expect(bicis_num).to.equal(1)
                done()
            })
        })
    })
    
    describe('POST BICICLETA /create', () => {
        it('Status 200', (done) => {
            let headers = {'content-type' : 'application/json'}
            let aBici = '{"code" : 3, "color": "green", "modelo": "bmx", "lat": -99.13, "lon":19.28 }'
            request.post({
                headers: headers,
                url: base_url + 'create',
                body: aBici
            }, (error, response, body) => {
                expect(response.statusCode).to.equal(200)
                let bici = JSON.parse(body).bicicleta
                expect(bici.color).to.equal('green')
                expect(bici.ubicacion[0]).to.equal(-99.13)
                expect(bici.ubicacion[1]).to.equal(19.28)
                done()
            })
        })
    })

})
