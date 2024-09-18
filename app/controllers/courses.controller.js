const db = require("../models");
const Courses = db.courses;
const Op = db.Sequelize.Op;


// Retrieve all Lessons from the database.
exports.findAll = (req, res) => {
  let {page, perPage} = req.query

  page = page || 0
  perPage = parseInt(perPage) || 100

  Courses.findAll({ offset: page * perPage, limit: perPage })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving courses.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Courses.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find course with id=${id}.`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: "Error retrieving course with id=" + id,
      });
    });
};