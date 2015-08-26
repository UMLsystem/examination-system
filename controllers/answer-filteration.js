exports.answerFilteration = function(trueAnswers,name) {
  var Item = trueAnswers.filter(function(val) {
    return name === val.questionId;
  });
  return Item[0];
};
