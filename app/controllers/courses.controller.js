const db = require("../models");
const Courses = db.courses;
const Op = db.Sequelize.Op;


// Retrieve all Lessons from the database.
exports.findAll = async (req, res) => {
  let {page, perPage, searchString, searchColumn, sortColumn, sortOrder} = req.query

  let whereCondition = {};
  const order = [];

  const coursesAttributes = Object.keys(Courses.rawAttributes) // get list of columns

  page = Number.parseInt(page) - 1 || 0
  perPage = parseInt(perPage) || 100
  sortOrder = sortOrder || 'ASC'

  if(page < 0){
    return res.status(400).send({message: "page has to be greater than 0"})
  }

  if(sortColumn && !coursesAttributes.includes(sortColumn)){
    return res.status(400).send({message: `invalid sort column '${sortColumn}'`})
  } else if (sortColumn) {
    order.push([sortColumn, sortOrder.toUpperCase()]);
  }

  if(searchString) {
    if (searchColumn && Array.isArray(searchColumn)) {
      searchColumn.forEach((column) => {
        if(!coursesAttributes.includes(searchColumn)) {
          return res.status(400).send({message: `invalid search column '${column}'`})
        }
      })
      whereCondition[Op.or] = searchColumn.map((column) => ({
        [column]: {
          [Op.like]: `%${searchString}%`
        }
      }));
    } else if (searchColumn) {
      if(!coursesAttributes.includes(searchColumn)) {
        return res.status(400).send({message: `invalid search column '${searchColumn}'`})
      }
      whereCondition[Op.or] = {
        [searchColumn]: {
          [Op.like]: `%${searchString}%`
        }
      }
    } else {
      whereCondition[Op.or] = {
        name: {
          [Op.like]: `%${searchString}%`
        }
      }
    } 
  }

  const courseCount = await Courses.count({where: whereCondition});

  Courses.findAll({ 
    where: whereCondition,
    offset: page * perPage, 
    limit: perPage,
    order
  })
    .then((data) => {
      const responseData = {
        courses: data,
        page: page + 1,
        perPage,
        count: courseCount
      }
      res.send(responseData);
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