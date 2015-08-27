var hbs = require('express-hbs');
var constant = require('../config/back-constant.json');
hbs.registerHelper('blank', function(options) {
  var text = '';
  for (var i = 0; i < options.length; i++) {
    var questionNo = i + 1;
    text += "<h4>" + questionNo + ' . ' + options[i].content + "</h4>\n" + "<input type='text' name=" + 'text_' + options[i].id + " ></br>";
  }
  return new hbs.SafeString(text);
});

hbs.registerHelper('singleChoice', function(options) {
  var text = '';
  text = getText('radio', options)
  return text;
});

hbs.registerHelper('multipleChoice', function(options) {
  var text = '';
  text = getText('checkbox', options);
  return text;
});

function getText(type, options) {
  var text = '';
  for (var i = 0; i < options.length; i++) {
    var questionNo = i + 1;
    text += "<h4>" + questionNo + ' . ' + options[i].content + "</h4>\n";
    for (var j = 0; j < options[i].options.length; j++) {
      var choiceNumber = String.fromCharCode(constant.ASCII_A + j);
      text += "<h4><input type=" + type + " name=" + type + '_' + options[i].id + " value=" + choiceNumber + ">" + choiceNumber + '.' + options[i].options[j] + '</h4>';
    }
  }
  return new hbs.SafeString(text);
}
