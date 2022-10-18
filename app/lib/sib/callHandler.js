import axios from "axios";

async function callHandler(params, url, method, requestType) {
    let response;
    const options = {
      method,
      url,
    };
    if (method === 'POST') {
        options.data = JSON.stringify(params)
    }
    await axios
      .request(options)
      .then((res) => {
        response = {
            status: 200,
            data: res.data,
            requestType
        }
      })
      .catch((err) => {
        response = err.response;
        response = {
            status: err.response.status,
            statusText: err.response.statusText,
            code: err.response.data.code,
            message: err.response.data.message,
            requestType
        }
      });
    return response;
  }
  

  export default callHandler