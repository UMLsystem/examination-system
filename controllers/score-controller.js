var models = require('../models');
var GetScore = require('./get-score');
var Type = models.type;
var Question = models.question;

function ScoreController() {

}
ScoreController.prototype.markExam = function(req, res, next) {
  var answerInfo = req.query.answerInfo;
  var answer = req.query.answer;
  var score = new GetScore();
  var trueAnswer = getTrueAnswer(answerInfo);
  var result = score.getResult(answer, trueAnswer);
  res.send(result);
};

function getTrueAnser(answerInfo) {
  var names = answerInfo.map(function(val) {
    return val.name;
  });
  Type.findAll({
    where: {
      typeName: {
        $in: names
      }
    }
  }).then(function(data) {
    var typeScores = data.map(function(val) {
      return val.score;
    });
  });
  for (var k = 0; k < answerInfo.length; k++) {
    answerInfo[k].score = typeScores[k];
  }
  return answerInfo;
}

module.exports = ScoreController;
