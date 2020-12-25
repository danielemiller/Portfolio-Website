const express = require('express');
const sendMail = require('./mail')

const app = express();

PORT = 3000;

app.use(express.static('../client/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get('/', (req, res) => {
//     res.sendFile('../client/public/index.html');
// })

app.post('/send_email_form', (req, res) => {
    const { message, name, email } = req.body
    sendMail(message, name, email, function (err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' })
        } else {
            res.json({ message: 'Email sent' })
        }
    });
    res.json({ message: 'Message received!!!' })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})