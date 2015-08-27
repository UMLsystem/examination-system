var models = require('../models');
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var Type = models.Type;
var Question = models.Question;

function ScoreController() {}

ScoreController.prototype.markExam = function(req, res, next) {
  var obj = req.body;
  var answers = [];
  answers = formAnswerArray(obj);
  console.log(answers);
  var trueAnswers = [];
  trueAnswers = completeAnswer(answers);
  res.send(trueAnswers);
};

function formAnswerArray(obj) {
  var answer = [];
  for (var val in obj) {
    answer.push({
      type: val.split("_")[0],
      questionId: val.split("_")[1],
      value: obj[val]
    });
  }
  return answer;
}

function completeAnswer(answers) {
  var questionIds = answers.map(function(val) {
    return val.questionId;
  });
  Question.findAll({
    where: {
      id: {
        $in: questionIds
      }
    },
    include: [{
      model: Type,
      where: {
        id: Sequelize.col('Question.typeId')
      }
    }]
  }).then(function(data) {
    var texts = [];
    tests = data.map(function(val) {
      var text = {};
      text.trueValue = val.dataValues.answer;
      text.score = val.dataValues.Type.dataValues.score;
      return text;
    });
    var answerInfo =[];
    for(var i = 0; i < answers.length; i++){
      var obj ={};
       obj.type = answers[i].type;
       obj.questionId = answers[i].questionId;
       obj.value = answers[i].value;
       obj.trueValue = tests[i].trueValue;
       obj.score = tests[i].score;
       answerInfo.push(obj);
     }
    console.log(tests);
    console.log(answerInfo);
  });
// var answer

}


module.exports = ScoreController;
