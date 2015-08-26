function Blank(name, value) {
  this.name = name;
  this.value = value;
}
Blank.prototype.mark = function(trueAnswer) {
  var score = 0;
  var that = this;
  var keyItem = trueAnswer.filter(function(val) {
    return (that.name === val.questionId);
  });
     if(this.value === keyItem.value){
       score = keyItem.score;
     }
  return score;
};

module.exports = Blank;
