const nodemail = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'bb93ff687ca464ff58df6b4e66303494-b6190e87-28c09abe',
        domain: 'https://app.mailgun.com/app/sending/domains/sandboxf0b90ac15a4a466997bfb78f701e5a16.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
    from: '',
    to: 'danielemiller@live.com',
    subject: '',
    text: ''
}

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log('Error occured');
    } else {
        console.log('Message sent')
    }
})