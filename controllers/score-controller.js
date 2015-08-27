var models = require('../models');
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var Type = models.Type;
var Question = models.Question;

function ScoreController() {}

ScoreController.prototype.markExam = function(req, res, next) {
  var obj = req.body;

  //  console.log(req.body);
  var answers = [];
  answers = formAnswerArray(obj);
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

function completeAnswer(answer) {
  //  console.log(answer);
  var questionIds = answer.map(function(val) {
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
    //  console.log(data);
    console.log(data.map(function(val) {
      return val.dataValues;
    }));
  });

}


module.exports = ScoreController;
