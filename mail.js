const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'bb93ff687ca464ff58df6b4e66303494-b6190e87-28c09abe',
        domain: 'https://app.mailgun.com/app/sending/domains/sandboxf0b90ac15a4a466997bfb78f701e5a16.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (message, name, email, cb) => {
    const mailOptions = {
        from: email,
        to: 'danielemiller@live.com',
        subject: name,
        text: message
    }
    
    transporter.sendMail(mailOptions, function(err, data, cb) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    })
}

module.exports = sendMail;
