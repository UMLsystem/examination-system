function Blank(name, value) {
  this.name = name;
  this.value = value;
}
Blank.prototype.mark = function(trueAnswer) {
 var score = 0;
  var key = this.deleteRepetation(this.value);
  var that = this;
  var keyItem = trueAnswer.filter(function(val) {
    return (that.name === val.ques_id);
  });
   var m = keyItem[0].value;
   for (var i = 0; i < key.length; i++) {
     if (m.indexOf(key[i]) !== -1) {
       score++;
     }
   }
  return score;
};

Blank.prototype.deleteRepetation = function(array) {
  var result = [];
  var newArray = array.sort();
  for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] === newArray[i + 1]) {
      continue;
    }
    result.push(newArray[i]);
  }
  return result;
};

module.exports = Blank;
