// import mailchimp_marketing from "@mailchimp/mailchimp_marketing";
// const mailchimp_transactional = require("@mailchimp/mailchimp_transactional")(process.env.MANDRILL_KEY);
// export default async function handler(req, res) {

//   mailchimp_marketing.setConfig({
//     apiKey: process.env.MAILCHIMP_KEY,
//     server: "us14",
//   });

//   // ADD CONTACT
//   let contact_id
//   const addContactResponse = await addContact(req.body, mailchimp_marketing);
//   console.log("THIS IS THE ACTUAL RESPONSE: ", addContactResponse);

//   if (addContactResponse.message === 'contact already exists') {

//   } else {
//     contact_id = addContactResponse.id
//   }

//   // // ADD TAG;
//   // const addTagResponse = await addTag(req.body, mailchimp_marketing, contact_id)
//   // console.log("THIS IS THE ADD TAG RESPONSE: ", addTagResponse);

//   // SEND MESSAGE
//   const sendMessageResponse = await sendMessage(
//     req.body,
//     mailchimp_transactional
//   );
//   console.log("THIS IS THE SEND MESSAGE RESPONSE: ", sendMessageResponse);


//   const membersResponse = await getClientInfo(
//     req.body,
//     mailchimp_marketing
//   )

//   // console.log("membersResponse: ", membersResponse);

//   res.json({ message: "good to go!" });
// }

// async function addContact(contact, mailchimp) {
//   let response;

//   const names = contact.fullName.split(' ')
//   try {
//     response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_MASTER_LIST_ID, {
//       email_address: contact.emailInput,
//       status: contact.newsletterOptIn ? "subscribed" : "pending",
//       merge_fields: {
//         FNAME: names[0],
//         LNAME: names[1] ? names[1] : '',
//         EMAIL: contact.emailInput,
//         PHONE: contact.phone,
//       },
//     });
//     response.message = 'contact added'
//   } catch (err) {
//     console.log("ERROR: ", err.response.body);
//     response = { ...err.response.body, message: 'contact already exists'};
//   }

//   return response;
// }

// async function sendMessage(contact, mailchimp) {
//   let response;
//   try {
//     response = await mailchimp.messages.send({
//       message: {
//         text: contact.message,
//         subject:
//           contact.emailInput +
//           " - " +
//           contact.fullName +
//           " - " +
//           contact.contactType,
//         from_email: 'me@seananthony.io',
//         from_name: 'Wirewise Client Site: Contact Form',
//         to: [
//           {
//             email: 'me@seananthony.io',
//             name: "Mailchimp Processing",
//             type: "to",
//           },
//         ],
//       },
//     });
//   } catch (err) {
//     console.log("ERROR: ", err.response);
//     response = err.response;
//   }

//   return response;
// }

// async function addTag(contact, mailchimp, contact_id) {
//   let response

//   try {
//     response = await mailchimp.lists.updateListMemberTags(
//       MAILCHIMP_MASTER_LIST_ID,
//       contact_id,
//       { tags: [{
//         name: contact.contactType,
//         status: 'active'
//       }] }
//     )
//   }
//   catch (err) {
//     console.log('ERROR: ', err.response);
//     response = err.response
//   }

//   return response
// }

// async function getClientInfo(contact, mailchimp) {

//   let response , found = false

//   try {
//     response = await mailchimp.lists.getListMembersInfo(process.env.MAILCHIMP_MASTER_LIST_ID, {
//       count: 1000
//     })

//     // console.log("THIS IS THE GET CLIENT INFO RESPONSE: ", response);

//     response.members.map((mem, i) => {
//       // console.log('MEMBER #' + i + ': ', mem);

//       if (mem.full_name.toLowerCase().includes('charles')) {
//         console.log(mem);
//       }

//       if (mem.email_address === contact.emailInput) {
//         console.log('CONTACT HAS BEEN FOUND!')
//         console.log(mem);
//         found = true
//       }
//     })

//     console.log('FOUND? ', found);
//   }
//   catch (err) {
//     console.log('ERROR: ', err.response);
//     response = err.response
//   }

//   return response
// }
 
// /*** FORM SUBMISSION PROCESS - NOTES ***/
// /*
// //     - Standard contact form at '/contact' - add the following:
// //         * email_address
// //         * status ( SUBSCRIBED | PENDING )
// //             * FNAME
// //             * LNAME
// //             * EMAIL
// //             * PHONE


// // */
