var Blank = require('./blank');
var Multiple = require('./multiple');
var SingleChoice = require('./single-choice');

function GetScore() {

}






// 化简；
GetScore.prototype.getResult = function(answer, trueAnswer) {
  var result = 0;
  for (var i = 0; i < answer.length; i++) {
    if (answer[i].type === "text") {
      var exerciesBlank = new Blank(answer[i].name, answer[i].value);
      result += exerciesBlank.mark(trueAnswer);
    } //改名字！！！！！
    if (answer[i].type === "checkbox") {
      var exerciesMultiple = new Multiple(answer[i].name, answer[i].value);
      result += exerciesMultiple.mark(trueAnswer);
    }
    if (answer[i].type === "radio") {
      var exerciesSingle = new SingleChoice(answer[i].name, answer[i].value);
      result += exerciesSingle.mark(trueAnswer);
    }
  }
  return result;
};

module.exports = GetScore;
