const { restful } = require("../utils/callApi");

exports.getListourses = async () => {
  try {
    const res = await restful.GET("web/api/get-list-courses");
    return res.data;
  } catch (err) {
    return err;
  }
};

exports.getCoursesByID = async (id) => {
  try {
    const res = await restful.GET(`web/api/get-courses-byid/${id}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

exports.getListCourses_rand = async () => {
  try {
    const res = await restful.GET(`web/api/get-list-infortraining`);
    return res.data;
  } catch (err) {
    return err;
  }
};
