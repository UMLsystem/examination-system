var models = require('../models');
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var Type = models.Type;
var Question = models.Question;

function ScoreController() {}

ScoreController.prototype.markExam = function(req, res, next) {
  var obj = req.body;
  res.send(req.body);
  console.log(req.body);
  var answer = [];
  answer = formAnswerArray(obj);
};

function formAnswerArray(obj) {
  var answer = [];
  for (var val in Obj) {
    answer.push({
      type: val.split("_")[0],
      questionId: val.split("_")[1],
      value: Obj[val]
    });
  }
  return answer;
}




module.exports = ScoreController;
