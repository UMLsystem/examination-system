var BlankQuestion = require('./blank-question');
var MultipleChoice = require('./multiple-choice');
var SingleChoice = require('./single-choice');

var answerTypeBuilder = {
  text: function(value, trueValue, score) {
    return new BlankQuestion(value, trueValue, score);
  },
  checkbox: function( value, trueValue, score) {
    return new MultipleChoice(value, trueValue, score);
  },
  radio: function( value, trueValue, score) {
    return new SingleChoice( value, trueValue, score);
  }
};

function Score() {}

Score.prototype.getScore = function(answers) {
  var result = 0;
  for (var i = 0; i < answers.length; i++) {
    var exercise = answerTypeBuilder[answers[i].type](answers[i].value, answers[i].trueValue, answers[i].score);
    result += exercise.mark();
  }
  return result;
};

module.exports = Score;
