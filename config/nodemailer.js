const nodemailer = require('nodemailer');

let Transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp@gmail.com',
    port:587,
    auth: {
        user: 'shivamggupta2604@gmail.com',
        pass: 'tzxdcngzxoqfeodb'
    }
});
 

module.exports = {transporter: Transporter}