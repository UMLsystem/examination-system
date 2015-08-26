var express = require('express');
var router = express.Router();
var QuestionInsertion = require('../../controllers/question-insert');
var questionInsert = new QuestionInsertion();
router.post('/',questionInsert.insertFill);

module.exports = router;
