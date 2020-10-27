const { restful } = require("../utils/callApi");

exports.getListCarousel = async () => {
  try {
    const res = await restful.GET("web/api/get-list-carousel");
    return res.data;
  } catch (err) {
    return err;
  }
};
