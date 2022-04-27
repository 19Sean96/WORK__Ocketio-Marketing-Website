const SibApiV3Sdk = require('sib-api-v3-sdk')
const Sib_Key = process.env.SIB_KEY

SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = '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'


function addContact() {

}

function sendMessage() {

    new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
        {
            'subject': 'Hello from Node SDK!',
            'sender': { 'email': '1996.sean.alexander@gmail.com', 'name': 'SendInBlue'},
            'replyTo': { 'email': '1996.sean.alexander@gmail.com', 'name': 'SendInBlue'},
            'to': [
                { 'name': 'seananthonyIO', 'email': 'me@seananthony.io'},
            ],
            'htmlContent': '<html><body><h1>This is a transactional email {{params.bodyMessage}}</h1></body></html>',
            'params': { 'bodyMessage': 'Made just for you!' }
        }
    ).then(data => {
        console.log('DATA: ', data)
    }, error => {
        console.error('ERROR: ', error)
    })

}

sendMessage()

// export default async function handler(req,res) {


// }