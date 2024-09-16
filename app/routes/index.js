module.exports = (app) => {
  var express = require("express");
  var router = express.Router();

  router.get("/", () => {
    console.log("Return some resource");
  });
  router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
  });
};
