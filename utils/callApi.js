const axios = require("axios");
const { url } = require("./url");

request = (path, method, payload = {}) => {
  try {
    if (method === "GET")
      Object.keys(payload).forEach((key) =>
        url.searchParams.append(key, payload[key])
      );
    const options = {
      method,
      url: `${url}/${path}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (method === "POST" || method === "PATCH")
      options.data = JSON.stringify(payload);

    return axios(options);
  } catch (err) {
    console.log(err);
    console.log("CALL API ERROR");
  }
};

const restful = {
  GET: (path, params) => request(path, "GET", params),
  POST: (path, body) => request(path, "POST", body),
  PUT: (path, body) => request(path, "PUT", body),
  DELETE: (path, params) => request(path, "DELETE", params),
};

module.exports = { restful };
