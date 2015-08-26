var answerFilteration = require('./answer-filteration');

function SingleChoice(name, value) {
  this.name = name;
  this.value = value;
}

SingleChoice.prototype.mark = function(trueAnswer) {
  var that = this;
  var score = 0;
  var keyItem = answerFilteration(trueAnswers, that.name);
  if (that.value === keyItem.value) {
    score = keyItem.score;
  }
  return score;
};

module.exports = SingleChoice;
