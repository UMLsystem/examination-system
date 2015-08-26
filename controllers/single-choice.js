var answerFilteration = require('./answer-filteration');

function SingleChoice(dataId, value) {
  this.dataId = dataId;
  this.value = value;
}

SingleChoice.prototype.mark = function(trueAnswer) {
  var that = this;
  var score = 0;
  var keyItem = trueAnswer.filter(function(val) {
    return (that.dataId === val.ques_id);
  });
  if (this.value[0] === keyItem[0].value[0]) {
    score = keyItem[0].score;
  }
  return score;
};

module.exports = SingleChoice;
