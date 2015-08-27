var BlankQuestion = require('./blank-question');
var MultipleChoice = require('./multiple-choice');
var SingleChoice = require('./single-choice');

var answerTypeBuilder = {
  text: function(type,questionId, value, trueValue, score) {
    return new BlankQuestion(type, questionId, value, trueValue, score);
  },
  checkbox: function(type, questionId, value, trueValue, score) {
    return new MultipleChoice(type, questionId, value, trueValue, score);
  },
  radio: function(type, questionId, value, trueValue, score) {
    return new SingleChoice(type, questionId, value, trueValue, score);
  }
};

function Score() {}

Score.prototype.getScore = function() {
  var result = 0;
  for (var i = 0; i < answers.length; i++) {
    var exercise = answerTypeBuilder[answers[i].type](answers[i].questionId, answers[i].value, answers[i].trueValue, answers[i].score);
    result += exercise.mark(trueAnswer);
  }
  return result;
};

module.exports = Score;
