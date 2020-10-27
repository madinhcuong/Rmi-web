const { restful } = require("../utils/callApi");

exports.getListClass = async () => {
  try {
    const res = await restful.GET("web/api/get-list-class");
    return res.data;
  } catch (err) {
    return err;
  }
};

exports.CreateStudent = async (body) => {
  try {
    const res = await restful.POST("web/api/create-student-riam", body);
    return res.data;
  } catch (err) {
    return err;
  }
};
