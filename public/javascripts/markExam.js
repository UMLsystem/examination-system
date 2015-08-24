//answerInfo之后上游会传过来,先假设其存在
var FormSerilizer = require('./form-serilizer.js');
$(function(){
  $('#submit').on("click",function(answerInfo) {
    var form = $('form')[0];
    var formserilizer = new FormSerilizer();
    var answer = formserilizer.scan(form);
    $.get('/score',{
      answer:answer,
      answerInfo:answerInfo
    },function(result) {
    $('#score').html(result);
    });
  });
});
module.exports = FormSerilizer;
