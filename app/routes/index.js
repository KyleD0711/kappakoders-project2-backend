var express = require('express');
var router = express.Router();
var courseRoutes = require('./courses');


/* GET home page. */
router.use('/courses', courseRoutes);

module.exports = router;
