const { restful } = require("../utils/callApi");

exports.getListNews = async () => {
  try {
    const res = await restful.GET("web/api/get-list-news-home");
    return res.data;
  } catch (err) {
    return err;
  }
};

exports.getNewsByID = async (id) => {
  try {
    const res = await restful.GET(`web/api/get-new-by-id/${id}`);
    return res.data;
  } catch (err) {
    return err;
  }
};
