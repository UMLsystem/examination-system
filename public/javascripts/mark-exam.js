$(function(){
  $('#submit').on("click",function( ) {
    var answer = getStudentAnswer();
    $.get('/score',{
      answer:answer,
    },function(result) {
    $('#score').html(result);
    });
  });
});

function getStudentAnswer() {
  var str = $('form').serialize();
  return str;
}
