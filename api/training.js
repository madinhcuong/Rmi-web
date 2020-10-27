const { restful } = require("../utils/callApi");

exports.getListTraiNing = async () => {
  try {
    const res = await restful.GET("web/api/get-list-training");
    return res.data;
  } catch (err) {
    return err;
  }
};

exports.getListTraiNingByIDTraining = async (id) => {
  try {
    const res = await restful.GET(
      `web/api/get-list-infortraining-byID-Training/${id}`
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

exports.getInforTraiNingById = async (id) => {
  try {
    const res = await restful.GET(`web/api/get-infortraining-by-id/${id}`);
    return res.data;
  } catch (err) {
    return err;
  }
};
