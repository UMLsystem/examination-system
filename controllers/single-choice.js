var answerFilteration = require('./answer-filteration');

function SingleChoice(type, questionId, value, trueValue, score) {
  this.type = type;
  this.questionId = questionId;
  this.value = value;
  this.trueValue = trueValue;
  this.score = score;
}

SingleChoice.prototype.mark = function(trueAnswer) {
  var score = 0;
  if (this.value === this.trueValue) {
    score = this.score;
  }
  return score;
};

module.exports = SingleChoice;
