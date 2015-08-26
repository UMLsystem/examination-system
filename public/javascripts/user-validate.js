function studentLoginRequsest(userNumber, userPassword) {
  $.post('/user-validate', {
    userNumber: userNumber,
    userPassword: userPassword
  }, function(resq) {
    if (resq.status === 200) {
      if (resq.data.userRole === 'teacher') {
        location.href = "teacher";
      } else if (resq.data.userRole === 'student') {
        location.href = "teacher";
      } else if (resq.data.userRole === 'admin') {
        location.href = "teacher";
      }
    } else {
      $('.label-username').html('用户名或密码错误!请重新输入...');
      $('#inputPassword').val('');
      $('#inputUsername').val('');
      $('.label-username').focus();
    }
  });
}

$(function() {
  $('#submit').on('click', function() {
    var userNumber = $('#inputUsername').val();
    var userPassword = $('#inputPassword').val();
    studentLoginRequsest(userNumber, userPassword);
  });
});
