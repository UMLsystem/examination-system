var express = require('express');
var router = express.Router();

var QuestionInsert = require('../../controllers/questionInsert');
var questionInsert = new QuestionInsert();


router.post('/',questionInsert.insertFill);

module.exports = router;
