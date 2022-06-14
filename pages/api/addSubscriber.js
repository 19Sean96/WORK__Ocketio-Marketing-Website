import axios from "axios";
import callHandler from "../../lib/sib/callHandler";
const k = process.env.SIB_KEY;
const sibURL = "https://api.sendinblue.com/v3";

axios.defaults.baseURL = sibURL;
axios.defaults.headers.common["api-key"] = k;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

export default async function handler(req, res) {
  const { email } = req.body;

  const contactParams = {
    email: email,
    attributes: {
      EMAIL: email,
      // SMS: phoneNum,
      // COMPANYNAME: companyName,
      // FIRSTNAME: firstName,
      // LASTNAME: lastName,
    },
    emailBlacklisted: false,
    smsBlacklisted: false,
  };

  const addContactResponse = await callHandler(
    contactParams,
    sibURL + '/contacts',
    'POST',
    'ADD CONTACT'
  )

  console.log('ADD CONTACT RESPONSE: ', addContactResponse);

  res.json({
    addContactResponse
  })
}
