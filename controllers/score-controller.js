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

//现在answerInfo信息不全。。重新凑answerInfo,需要获得题号，题答案，类型，分数。。。。

function getTrueAnser(answerInfo) {
  var names = answerInfo.map(function(val) {
    return val.name;
  });
  Type.findAll({
    where: {
      type_name: {
        $in: names
      }
    }
  }).then(function(data) {
    var type_scores = data.map(function(val) {
      return val.score;
    });
  });
  for (var k = 0; k < answerInfo.length; k++) {
    answerInfo[k].score = type_scores[k];
  }
  return answerInfo;
}

module.exports = ScoreController;
}




//   var questionIds = answerInfo.map(function(val){
//     return val.questionId;
//   });
//   Question.findAll({
//     where:{que_id:{
//       $in:questionIds
//     }
//   }
// }).then(functino(data){
//   var typeItds = data.map(function(val){
//     return val.typeId;
//   });
//   // var questionVaule
// });
