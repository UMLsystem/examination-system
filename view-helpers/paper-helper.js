var hbs = require('express-hbs');

hbs.registerHelper('blank', function(options) {
  var text = '';
  for (var i = 0; i < options.length; i++) {
    var questionNo = i + 1;
    text += "<h4>" + questionNo + ' . ' + options[i].content +  "</h4>\n"
          + "<input type='text' name=" + options[i].questionId + " value=''></br>";
  }

  return new hbs.SafeString(text);
});

hbs.registerHelper('singleChoices', function(options) {
  var text = '';
  for (var i = 0; i < options.length; i++) {
    var questionNo = i + 1;
    text += "<h4>" + questionNo + ' . ' + options[i].content +  "</h4>\n";
    for(var j = 0; j < options[i].options;j++){
      var choiceNumber = String.fromCharCode(65+j);
      text += "<input type='radio' name="+options[i].options[j]+"value="+choiceNumber+">"+choiceNumber+'\n';
    }
  }
  return new hbs.SafeString(text);
});

hbs.registerHelper('multipleChoices', function(options) {
  var text = '';
  for (var i = 0; i < options.length; i++) {
    var questionNo = i + 1;
    text += "<h4>" + questionNo + ' . ' + options[i].content +  "</h4>\n";
    for(var j = 0; j < options[i].options;j++){
      var choiceNumber = String.fromCharCode(65+j);
      text += "<input type='checkbox' name="+options[i].options[j]+"value="+choiceNumber+">"+choiceNumber+'\n';
    }
  }
  return new hbs.SafeString(text);
});
