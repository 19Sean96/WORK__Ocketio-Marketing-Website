// const SibApiV3Sdk = require('sib-api-v3-sdk')
// // import SibApiV3Sdk from 'sib-api-v3-sdk'
// const defaultClient = SibApiV3Sdk.ApiClient.instance
// const k = process.env.SIB_KEY
// const apiKey = defaultClient.authentications['api-key']
// apiKey.apiKey = k


// // Classes for managing campaign system
// const emailCampaignsInstance = new SibApiV3Sdk.EmailCampaignsApi()
// const createEmailCampaign = new SibApiV3Sdk.CreateEmailCampaign()

// // Classes for managing transactional
// const transactionalApiInstance =  new SibApiV3Sdk.TransactionalEmailsApi()
// const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()

// // Classes for managing contacts, lists, and etc.
// const contactsApiInstance = new SibApiV3Sdk.ContactsApi()
// const createContact = new SibApiV3Sdk.CreateContact()






// export default async function handler(req,res) {
    
//     console.log("REQ: ", req.body)
    
//     const {
//         fullName,
//         companyName,
//         emailInput,
//         contactType,
//         message,
//         newsletterOptIn,
//         phone
//     } = req.body

//     let [ firstName, lastName ] = fullName.split(' ');
//     let phoneNum = '+1' + phone
//     lastName = lastName ? lastName : ''
//     createContact.email = emailInput
//     createContact.attributes = {
//         'EMAIL': emailInput,
//         'SMS': phoneNum,
//         'COMPANYNAME': companyName,
//         'FIRSTNAME': firstName,
//         'LASTNAME': lastName ? lastName : ''
//     }

//     sendSmtpEmail.subject = `CLIENT SITE ENTRY - TYPE: ${contactType}`;
//     sendSmtpEmail.htmlContent = `
//         <html>
//             <body>
//                 <h1>Someone has submitted a form entry on the wirewise client site.</h1>
//                 <h2>Message Details:</h2>
//                 <ul>
//                     <li><strong>Name: </strong>${fullName}</li>
//                     <li><strong>Company: </strong>${companyName}</li>
//                     <li><strong>Email: </strong>${emailInput}</li>
//                     <li><strong>Phone Number: </strong>${phone}</li>
//                     <li><strong>Newsletter Subscription?</strong> ${newsletterOptIn}</li>
//                 </ul>
//                 <h2>Message: </h2>
//                 <p>${message}</p>
//             </body>
//         </html>`;
//     sendSmtpEmail.sender = {"name":"Wirewise Client Site","email":"1996.sean.alexander@gmail.com"};
//     sendSmtpEmail.to = [{"email":"me@seananthony.io","name":"Seans personal"}];
//     sendSmtpEmail.cc = [{"email":"salexander@unwiredrevolution.com","name":"Sean's work email"}];
//     sendSmtpEmail.replyTo = {"email":"1996.sean.alexander@gmail.com","name":"Sean the dev"};
//     sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};

//     let { lists } = await getAllLists()

//     lists = lists.map(list => ({
//         name: list.name.toLowerCase(),
//         id: list.id,
//         folder: list.folderId
//     }))
//     const subListId = lists.filter(list => list.name === 'subscribed')[0].id //SHOULD BE '6'
//     const listDestination = lists.filter(list => list.name === contactType)
//     if (newsletterOptIn) listDestination.push(lists.filter(list => list.name === 'subscribed')[0])
//     createContact.listIds = listDestination.map(list => list.id)

//     let addContactResponse = await addContact(createContact)

//     // console.log('ADD CONTACT RESPONSE: ', addContactResponse);
//     if (addContactResponse.code === 'duplicate_parameter') {
//         const updateContactResponse = await updateExistingContact(createContact, listDestination, subListId)
//     }

//     const sentEmailResponse = await sendEmail(sendSmtpEmail)


//     res.json({message: 'done'})

// }


// async function sendEmail(sendSmtpEmail) {
//     let response

//     await transactionalApiInstance.sendTransacEmail(sendSmtpEmail)
//         .then(data => {
//             console.log('API called successfully. Returned data: ', JSON.stringify(data, null, 4));

//             response = data
//         }, error => {
//             console.log('ERROR!!!');
//             console.error(error)

//             response = error
//         })

//     return response
// }

// async function addContact(createContact) {
//     let response

//     await contactsApiInstance.createContact(createContact)
//         .then(data => {
//             console.log('CONTACT CREATED successfully. Returned data: ', JSON.stringify(data, null, 4));
//             response = {
//                 status: 200,
//                 code: 'contact-added',
//                 message: 'Contact has been successfully added',
//                 contactID: data.id
//             }
//         }, error => {
//             console.log('CONTACT ADDING ERROR!!!');
//             console.error(error)
//             response = {
//                 status: error.status,
//                 code: error.response.body.code,
//                 message: error.response.body.message
//             }
//         })

//     return response
// }

// async function updateExistingContact(createContact, updatedLists, subListId) {
//     console.log('NEW LISTS TO BE ADDED/REMOVED', updatedLists);
//     let getInfoResponse, updateContactResponse, listIdsToAdd = [], listIdsToRemove = []
//     console.log('THIS IS THE CREATE CONTACT OBJECT: ', createContact);
//     const identifier = createContact.email
//     // GET EXISTING CONTACT DETAILS (FOR LIST INFORMATION - PRIMARILY IF WE ARE UPDATED SUB STATUS)
//     await contactsApiInstance.getContactInfo(identifier)
//         .then(data => {
//             getInfoResponse = data
//         }, error => {
//             console.error(error)
//             getInfoResponse = data
//         })
        
//     console.log('GET EXISTING CONTACT INFO - RETURNED DATA: ', getInfoResponse);
//     return getInfoResponse

//     // TODO: add ability to unsub/sub + add additional contact list IDs
// }

// async function getAllLists() {

//     let opts = {
//         'limit': 50,
//         'offset': 0
//     }, response

//     await contactsApiInstance.getLists(opts)
//         .then(data => {
//             // console.log('API called successfully. Returned data: ', JSON.stringify(data, null, 4));
//             response = data
//         }, error => {
//             // console.log('ERROR!!!');
//             console.error(error)
//             response = error
//         })

//     return response
// }

// // SENDING FLOW - OUTLINE
// /*
//  *  Step 1: Check if user is already listed as a contact
//  */
