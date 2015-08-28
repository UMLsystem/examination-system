function SingleChoice(value, trueValue, score) {
  this.value = value;
  this.trueValue = trueValue;
  this.score = score;
}

SingleChoice.prototype.mark = function() {
  var score = 0;
  if (this.value === this.trueValue) {
    score = this.score;
  }
  return score;
};

module.exports = SingleChoice;
