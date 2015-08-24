$.cookie('studentId', 1);
var stuId = $.cookie('studendId');
$(function() {
  var oldPassword = $('#password').val();
  var newPassword = $('#newPassword').val();
  var validatePassword = $('#validatePassword').val();
  var hasValue = oldPassword && newPassword && validatePassword;
  $("#oldPassword").blur(function() {
    $.get('/password', {
      studendId: studendId,
      oldPassword: oldPassword,
    }, function(resp) {
    });
  });
  //
  // $('#submit').click(function(){
  //   $("#message").html("");
  // });
  // if(!hasValue) {
  //   $('#message').append('you should fill all filed').css('color','red');
  //   return false;
  // }
  // var matchPassword = false;
  // if(newPassword === validatePassword) {
  //   matchPassword = true;
  // }
  // if(matchPassword === true){
  //   $('#message').append('password are not same').css('color','red');
  //   return false;
  // }
  // $.get('/password', {
  //   studendId : studendId,
  //   oldPassword : oldPassword,
  // })

});
