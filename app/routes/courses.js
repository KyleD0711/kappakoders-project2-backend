var express = require('express');
var router = express.Router();

var coursesController = require('../controllers/courses.controller')


const dummyJson = {
  "courses": [
    {
      "id": 1,
      "dept": "ACCT",
      "courseNumber": "ACCT-4994",
      "level": 4,
      "hours": 4,
      "name": "IS: Accounting",
      "description": ""
    },
    {
      "id": 2,
      "dept": "ACCT",
      "courseNumber": "ACCT-5003",
      "level": 5,
      "hours": 3,
      "name": "Issues in Advanced Accounting Concepts",
      "description": ""
    },
    {
      "id": 3,
      "dept": "ACCT",
      "courseNumber": "ACCT-5103",
      "level": 5,
      "hours": 3,
      "name": "Accounting Analytics",
      "description": "The course will provide the skills to assist in evaluating issues related to a company's financing and operating activities. The course will also focus on how managers can effectively use accounting information and analytical tools to improve performance."
    },
    {
      "id": 4,
      "dept": "ACCT",
      "courseNumber": "ACCT-5113",
      "level": 5,
      "hours": 3,
      "name": "Advanced Tax Accounting",
      "description": "This course is a review of relevant tax topics. The areas of the taxation of individuals, corporations, partnerships, S corporations, property transactions, and gifts and estates will be covered."
    },
    {
      "id": 5,
      "dept": "ACCT",
      "courseNumber": "ACCT-5123",
      "level": 5,
      "hours": 3,
      "name": "Advanced Auditing and Professional Ethics",
      "description": "This course studies advanced concepts, theories, and techniques applied to external financial, governmental, and internal audit engagements. Ethical issues in accounting are discussed."
    },
    {
      "id": 6,
      "dept": "ACCT",
      "courseNumber": "ACCT-5133",
      "level": 5,
      "hours": 3,
      "name": "Advanced Financial Accounting",
      "description": "This course studies advanced concepts and techniques applied to consolidations theory and practice. Emphasis is on real-world applications of how information supports managerial decision-making."
    }
  ]
}


/* GET all courses */
router.get('/', coursesController.findAll);

/* GET course by ID */
router.get('/:id', coursesController.findOne);

module.exports = router;
