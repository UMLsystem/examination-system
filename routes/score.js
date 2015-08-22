var GetScore = require('./get-score.js');
var express = require('express');
var router = express.Router();
var models = require('../models');
var QuestionType = models.ques_type;

router.get('/score', function(req, res) {
      var answerInfo = req.query.answerInfo;
      var answer = req.query.answer;
      var result = 0;
      var score = new GetScore();
      var trueAnswer = expandTrueAnswer(answerInfo);
      result = score.getResult(answer, trueAnswer);
      res.send(result);
    });
});

function expandTrueAnser(answerInfo) {
  var expandAnswer = [];
  expandAnswer = answerInfo.forEach(function(val) {
    QuestionType.findOne(val.type_id).then(function(ques_type){
      val.score = ques_type.dataValues.score;
    });
  return expandAnswer;
}

module.exports = router;
