var express = require('express');
var router = express.Router();

var coursesController = require('../controllers/courses.controller')


/* GET all courses */
router.get('/', coursesController.findAll);

/* GET course by ID */
router.get('/:id', coursesController.findOne);

module.exports = router;
