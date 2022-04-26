const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
    to: '1996.sean.alexander@gmail.com',
    from: 'me@seananthony.io',
    subject: 'Sendgrid - Test EMAIL',
    text: 'the cat jumped over the dog',
    html: '<strong>the cat jumped over the dog</strong>'
}

sgMail.send(msg).then(() => console.log('EMAIL SENT')).catch(error => console.log(error))