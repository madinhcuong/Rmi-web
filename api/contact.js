const { restful } = require("../utils/callApi");

exports.CreateContact = async (body) => {
  try {
    const res = await restful.POST("web/api/create-contact", body);
    return res.data;
  } catch (err) {
    return err;
  }
};
