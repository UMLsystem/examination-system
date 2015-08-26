var express = require('express');
var router = express.Router();
<<<<<<< bf7d31d9a9c6cddfb4209451b1dbaef70569fa8d
var QuestionInsertion = require('../../controllers/question-insert');
var questionInsert = new QuestionInsertion();
=======

var QuestionInsertion = require('../../controllers/question-insert');
var questionInsert = new QuestionInsertion();

>>>>>>> modify filename
router.post('/',questionInsert.insertFill);

module.exports = router;
