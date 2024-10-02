var express = require('express');
var router = express.Router();

var coursesController = require('../controllers/courses.controller')


/* Create Course */
router.post('/', coursesController.create)

/* GET all courses */
router.get('/', coursesController.findAll);

/* GET course by ID */
router.get('/:id', coursesController.findOne);

router.delete('/:id', coursesController.delete);

router.put('/:id', coursesController.update);

module.exports = router;
