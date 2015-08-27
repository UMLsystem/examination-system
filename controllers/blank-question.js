function BlankQuestion(type, questionId, value, trueValue, score) {
  this.type = type;
  this.questionId = questionId;
  this.value = value;
  this.trueValue = trueValue;
  this.score = score;
}

BlankQuestion.prototype.mark = function() {
  var score = 0;
  if (this.value === this.truevalue) {
    score = this.score;
  }
  return score;
};

module.exports = BlankQuestion;
