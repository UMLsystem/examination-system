var express = require('express');
var router = express.Router();

var QusetionInsert = require('../../controllers/questionInsert');
var questionInsert = new QuestionInsert();


router.post('/',questionInsert.insertSingle);

module.exports = router;
