var express = require("express");
var router = express.Router();
const { url } = require("../utils/url");
const moment = require("moment");

const {
  getListTraiNing,
  getListTraiNingByIDTraining,
  getInforTraiNingById,
} = require("../api/training");
const {
  getListourses,
  getCoursesByID,
  getListCourses_rand,
} = require("../api/courses");
const { getListNews, getNewsByID } = require("../api/news");
const { getListCarousel } = require("../api/carousel");
const { CreateContact } = require("../api/contact");
const { getListClass, CreateStudent } = require("../api/class");

/* GET home page. */
router.get("/", async (req, res) => {
  let training = await getListTraiNing();
  let courses = await getListourses();
  let courses_rand = await getListCourses_rand();
  let carousel = await getListCarousel();

  res.render("index", { training, courses, courses_rand, url, carousel });
});

// list thông tin khóa học
router.get("/thong-tin-khoa-hoc/:id", async (req, res) => {
  let training = await getListTraiNing();
  let courses = await getListourses();

  let id_course = req.params.id;
  let coursesByID = await getCoursesByID(id_course);
  let coursesByID_diff = await getCoursesByID(id_course);
  res.render("page/course/listCourse", {
    training,
    courses,
    coursesByID,
    coursesByID_diff,
    url,
    moment,
  });
});

//-- Chi tiết thông tin khóa học
router.get("/chi-tiet-thong-tin-khoa-hoc/:id", async (req, res) => {
  let training = await getListTraiNing();
  let courses = await getListourses();

  let id_training = req.params.id;
  let inforTraining = await getInforTraiNingById(id_training);
  let courses_rand = await getListCourses_rand();

  res.render("page/training/inforTraining", {
    training,
    courses,
    inforTraining,
    courses_rand,
    url,
    moment,
  });
});

// list tin tức
router.get("/tin-tuc", async (req, res) => {
  let training = await getListTraiNing();
  let courses = await getListourses();

  let listNews = await getListNews();
  let listNews_diff = await getListNews();

  res.render("page/news/listNews", {
    training,
    courses,
    listNews,
    listNews_diff,
    url,
    moment,
  });
});

// chi tiết tin tưc
router.get("/tin-tuc/chi-tiet-tin-tuc/:id", async (req, res) => {
  let training = await getListTraiNing();
  let courses = await getListourses();

  let id_news = req.params.id;
  let newsByID = await getNewsByID(id_news);
  let listNews = await getListNews();

  res.render("page/news/inforNews", {
    training,
    courses,
    newsByID,
    listNews,
    url,
    moment,
  });
});

// list dao tao
router.get("/dao-tao/:id", async (req, res) => {
  let training = await getListTraiNing();
  let courses = await getListourses();

  let id_training = req.params.id;
  let listByIdTraining = await getListTraiNingByIDTraining(id_training);

  res.render("page/training/listTraining", {
    training,
    courses,
    listByIdTraining,
    url,
    moment,
  });
});

// liên hệ
router.get("/lien-he", async (req, res) => {
  let training = await getListTraiNing();
  let courses = await getListourses();

  res.render("page/contact/contact", {
    training,
    courses,
  });
});

// them lien he
router.post("/lien-he", async (req, res) => {
  let create_contact = await CreateContact(req.body);

  if (create_contact == "CREATE_SUCCESS") {
    res.redirect("/lien-he");
  }
});

// ghi danh
router.get("/ghi-danh", async (req, res) => {
  let training = await getListTraiNing();
  let courses = await getListourses();

  let listClass = await getListClass();

  console.log(listClass);

  res.send("oke");

  // res.render("page/contact/contact", {
  //   training,
  //   courses,
  // });
});

// create ghi danh
router.post("/ghi-danh", async (req, res) => {
  // body giong the nay
  //   {
  //     "id_class": "5f6dc1e6d54c60226469b579",
  //     "name": "dinh cuong",
  //     "email": "cuong@gmail.com",
  //     "phone": "0945678944",
  //     "date" : "20/01/2022",
  //     "card_id": "346585848",
  //     "address": "HCM"
  // }

  let create_student = await CreateStudent(body);

  if (create_student == "CREATE_SUCCESS") {
    res.redirect("/lien-he");
  }
});

module.exports = router;
