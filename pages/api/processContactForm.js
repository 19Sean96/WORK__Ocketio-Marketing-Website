import axios from "axios";
import callHandler from "../../lib/sib/callHandler";
const k = process.env.SIB_KEY;
const sibURL = "https://api.sendinblue.com/v3";

axios.defaults.baseURL = sibURL;
axios.defaults.headers.common["api-key"] = k;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

export default async function handler(req, res) {

  const {
    fullName,
    companyName,
    emailInput,
    contactType,
    message,
    newsletterOptIn,
    phone,
  } = req.body;
  
  let [firstName, lastName] = fullName.split(" ");
  lastName = lastName ? lastName : "";
  let phoneNum = phone ? "+1" + phone : ''
  console.log("DID THEY OPT IN??? ", newsletterOptIn)
  const contactParams = {
    email: emailInput,
    attributes: {
      EMAIL: emailInput,
      SMS: phoneNum,
      COMPANYNAME: companyName,
      FIRSTNAME: firstName,
      LASTNAME: lastName,
    },
    emailBlacklisted: !newsletterOptIn,
    smsBlacklisted: !newsletterOptIn
  };

  const sendEmailParams = {
    subject: `CLIENT SITE ENTRY - TYPE: ${contactType}`,
    htmlContent: `
        <html>
            <body>
                <h1>Someone has submitted a form entry on the wirewise client site.</h1>
                <h2>Message Details:</h2>
                <ul>
                    <li><strong>Name: </strong>${fullName}</li>
                    <li><strong>Company: </strong>${companyName}</li>
                    <li><strong>Email: </strong>${emailInput}</li>
                    <li><strong>Phone Number: </strong>${phone}</li>
                    <li><strong>Newsletter Subscription?</strong> ${newsletterOptIn}</li>
                </ul>
                <h2>Message: </h2>
                <p>${message}</p>
            </body>
        </html>`,
    sender: {
      name: "Wirewise Client Site",
      email: "1996.sean.alexander@gmail.com",
    },
    to: [
      {
        email: "me@seananthony.io",
        name: "Sean's Personal",
      },
    ],
    cc: [
      {
        email: "salexander@unwiredrevolution.com",
        name: "Sean's work email",
      },
    ],
    replyTo: {
      name: "Sean the dev",
      email: "1996.sean.alexander@gmail.com",
    },
    headers: {
      "Some-Custom-Name": "unique-id-1234",
    },
  };
  
  const allListsResponse = await callHandler(
    null,
    sibURL + '/contacts/lists',
    'GET',
    'GET ALL CONTACT LISTS'
  )

  if (allListsResponse.status === 200) {
      let { lists } = allListsResponse.data
    
      lists = lists.map(list => ({
          name: list.name.toLowerCase(),
          id: list.id,
          folder: list.folderId
      }))
      const subscribedListItem = lists.filter(list => list.name === 'subscribed')[0]
      const listDestination = lists.filter(list => list.name === contactType)
      if (newsletterOptIn) {
          listDestination.push(subscribedListItem)
      }
      contactParams.listIds = listDestination.map(list => list.id)
  } else {
      contactParams.listIds = [8]
  }

  const addContactResponse = await callHandler(
    contactParams,
    sibURL + "/contacts",
    "POST",
    'ADD CONTACT'
  );
  console.log('ADD CONTACT RESPONSE: ', addContactResponse);

  const sendEmailResponse = await callHandler(
    sendEmailParams,
    sibURL + "/smtp/email",
    "POST",
    'SEND TRANSACTIONAL EMAIL'
  );
  console.log("SEND EMAIL RESPONSE: ", sendEmailResponse);
  
  res.json({ 
      allListsResponse,
      addContactResponse,
      sendEmailResponse
  });
}