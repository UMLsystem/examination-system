var Blank = require('./blank.js');
var Multiple = require('./multiple.js');
var SingleChoice = require('./single-choice.js');
function GetScore() {

}
GetScore.prototype.getResult = function(answer,trueAnswer) {
  var result = 0;
  for (var i = 0; i < answer.length; i++) {
    if (answer[i].type === "text") {
      var exerciesText = new Blank(answer[i].name,answer[i].value);
      result += exerciesText.mark(trueAnswer);
    }
    if (answer[i].type === "checkbox") {
      var exerciesMultiple = new Multiple(answer[i].name,answer[i].value);
      result += exerciesMultiple.mark(trueAnswer);
    }
    if (answer[i].type === "radio") {
      var exerciesSingle = new SingleChoice(answer[i].name,answer[i].value);
      result += exerciesSingle.mark(trueAnswer);
    }
  }
  return result;
};

module.exports = GetScore;
