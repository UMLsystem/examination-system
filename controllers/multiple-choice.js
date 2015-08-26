var answerFilteration = require('./answer-filteration');

function MultipleChoice(name, value) {
  this.name = name;
  this.value = value;
}

MultipleChoice.prototype.mark = function(trueAnswers) {
  var that = this;
  var finalScore;
  var keyItem = answerFilteration(trueAnswers, that.name);
  if (that.value === keyItem.value) {
    finalScore = keyItem.score;
  } else if (keyItem.value.match(that.value)) {
    finalScore = parseInt(keyItem.score / 2);
  } else {
    finalScore = 0;
  }
  return finalScore;
};

module.exports = MultipleChoice;
