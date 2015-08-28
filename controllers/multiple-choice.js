function MultipleChoice(value, trueValue, score) {
  this.value = value;
  this.trueValue = trueValue;
  this.score = score;
}

MultipleChoice.prototype.mark = function() {
  var finalScore;
  if (this.value === this.trueValue) {
    finalScore = this.score;
  } else if (this.trueValue.match(this.value)) {
    finalScore = parseInt(this.score / 2);
  } else {
    finalScore = 0;
  }
  return finalScore;
};

module.exports = MultipleChoice;
