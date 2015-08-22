//answerInfo之后上游会传过来
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
