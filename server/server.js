const express = require('express');

const app = express();

PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get('/', (req, res) => {
//     res.sendFile('../client/public/index.html');
// })

app.post('/send_email_form', (req, res) => {
    mail = {
        message: req.body.message,
        name: req.body.name,
        email: req.body.email
    }
    sendEmail(mail);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})