const nodemailer = require('nodemailer')

const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jameson.glover45@ethereal.email',
        pass: 'wxE1mA2n5NSc7u7AxV'
    }
}

module.exports = nodemailer.createTransport(mailConfig)
