function FormSerilizer() {

}

function getAnswer(val, result) {
  for (var i = 0; i < result.length; i++) {
    if (val.name === result[i].name) {
      result[i].value.push(val.value);
      return;
    }
  }
  result.push({
    name: val.name,
    type: val.type,
    value: [val.value]
  });
}

FormSerilizer.prototype.scan = function(form) {
  var result = [];
  [].forEach.call(form, function(val) {
    if ((val.type === 'text' || val.checked) && val.name !== '') {
      getAnswer(val, result);
    }
  });
  return result;
};
module.exports = FormSerilizer;
