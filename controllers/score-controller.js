var models = require('../models');
var Score = require('./score');
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var Type = models.Type;
var Question = models.Question;
//var answersInfos = [];
function ScoreController() {}

ScoreController.prototype.markExam = function(req, res, next) {
  var answersInfos = [];
  var answers = formAnswerArray(req.body);
  completeAnswer(answers,answersInfos).then(function(data){
   //console.log(data);
   var score = new Score();
   var result = score.getScore(data);
   console.log(result);
  })
  res.send(answers);
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

function completeAnswer(answers,answersInfos) {
  var questionIds = answers.map(function(val) {
    return val.questionId;
  });
return  Question.findAll({
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
    //var answerInfo = [];
    for (var i = 0; i < answers.length; i++) {
      var obj = {};
      obj.type = answers[i].type;
      obj.questionId = answers[i].questionId;
      obj.value = answers[i].value;
      obj.trueValue = tests[i].trueValue;
      obj.score = tests[i].score;
      answersInfos.push(obj);
    }
    return answersInfos;
  });
  //return answersInfos;
}


module.exports = ScoreController;
