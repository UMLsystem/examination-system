var models = require('../models');
var GetScore = require('./get-score.js');
var Type = models.type;

function ScoreController() {

}
ScoreController.prototype.markExam = function(req, res, next) {
var answerInfo = req.query.answerInfo;
var answer = req.query.answer;
var result = 0;
var score = new GetScore();
var trueAnswer = expandTrueAnswer(answerInfo);
result = score.getResult(answer, trueAnswer);
res.send(result);
};

function expandTrueAnser(answerInfo) {
  var expandAnswer = [];
  expandAnswer = anserInfo.forEach(function(val) {
    QuestionType.findOne(val.type_id).then(function(questions) {
      val.score = questions.dataValues.type_score;
    });
  });
  return expandAnswer;
}

module.exports = ScoreController;
