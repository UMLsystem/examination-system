function BlankQuestion(value, trueValue, score) {
  this.trueValue = trueValue;
  this.score = score;
  this.value = value;
}

BlankQuestion.prototype.mark = function() {
  var score = 0;
  console.log(this.value);
  console.log(this.trueValue);
  if (this.value === this.trueValue) {
    score = this.score;
  }
  return score;
};

module.exports = BlankQuestion;
