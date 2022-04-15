import mailchimp_marketing from "@mailchimp/mailchimp_marketing";
const mailchimp_transactional = require("@mailchimp/mailchimp_transactional")(
  process.env.MAILCHIMP_KEY
);
export default async function handler(req, res) {
  mailchimp_marketing.setConfig({
    apiKey: process.env.MAILCHIMP_KEY,
    server: "us14",
  });

  // ADD CONTACT
  const addContactResponse = await addContact(req.body, mailchimp_marketing);
  console.log("THIS IS THE ACTUAL RESPONSE: ", addContactResponse);

  // ADD TAG

  // SEND MESSAGE
  const sendMessageResponse = await sendMessage(
    req.body,
    mailchimp_transactional
  );
  console.log("THIS IS THE SEND MESSAGE RESPONSE: ", sendMessageResponse);

  res.json({ message: "good to go!" });
}

async function addContact(contact, mailchimp) {
  let response;
  console.log("DOES THE USER CONSENT TO NEWSLETTER? ", contact.newsletterOptIn);
  try {
    response = await mailchimp.lists.addListMember("6963292142", {
      email_address: contact.emailInput,
      status: contact.newsletterOptIn ? "subscribed" : "pending",
      merge_fields: {
        FNAME: contact.fullName,
        LNAME: "",
        EMAIL: contact.emailInput,
        PHONE: contact.phone,
      },
    });
  } catch (err) {
    console.log("ERROR: ", err.response.body);
    response = err.response.body;
  }

  return response;
}

async function sendMessage(contact, mailchimp) {
  let response;
  console.log(contact);
  try {
    response = await mailchimp.messages.send({
      message: {
        text: contact.message,
        subject:
          contact.emailInput +
          " - " +
          contact.fullName +
          " - " +
          contact.contactType,
        from_email: contact.emailInput,
        from_name: process.env.MAILCHIMP_INBOX_DOMAIN,
        to: [
          {
            email: process.env.MAILCHIMP_INBOX_DOMAIN,
            name: "Mailchimp Processing",
            type: "to",
          },
        ],
      },
    });
  } catch (err) {
    console.log("ERROR: ", err.response.body);
    response = err.response.body;
  }

  return response;
}

/*** FORM SUBMISSION PROCESS - NOTES ***/
/*
    - Standard contact form at '/contact' - add the following:
        * email_address
        * status ( SUBSCRIBED | PENDING )
            * FNAME
            * LNAME
            * EMAIL
            * PHONE


*/
