var BlankQuestion = require('./blank-question');
var MultipleChoice = require('./multiple-choice');
var SingleChoice = require('./single-choice');

var answerTypeBuilder = {
  text: function(name, value) {
    return new BlankQuestion(name, value);
  },
  checkbox: function(name, value) {
    return new MultipleChoice(name, value);
  },
  radio: function(name, value) {
    return new SingleChoice(name, value);
  }
};

function Score() {

}
Score.prototype.getScore = function(answers, trueAnswers) {
  var result = 0;
  for (var i = 0; i < answers.length; i++) {
    var exercise = answerTypeBuilder[answers[i].type](answers[i].name, answers[i].value);
    result += exercise.mark(trueAnswer);
  }
  return result;
};

module.exports = score;
