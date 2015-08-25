function usernameTypeValidate() {
  var studentNumber = $('#inputUsername').val();
  var arr = studentNumber.split('');
  var flag = false;
  arr.forEach(function(val) {
    if (!(val.charCodeAt() >= 48 && val.charCodeAt() <= 57)) {
      flag = true;
    }
  });
  return flag;
}


function studentLoginRequsest(studentNumber,studentPassword) {
  $.post('/student-validate', {
    studentNumber: studentNumber,
    studentPassword: studentPassword
  }, function(resq) {
    if (resq.obj.status === 200) {
      $.cookie('username', resq.obj.data.studentNumber, {
        expires: 1,
        path: '/'
      });
      $.cookie('password', resq.obj.data.studentPassword, {
        expires: 1,
        path: '/'
      });
      $.cookie('userid', resq.obj.data.id, {
        expires: 1,
        path: '/'
      });
      location.href = "teacher";
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
    var studentNumber = $('#inputUsername').val();
    // var password = $.md5($('#inputPassword').val());
    var studentPassword = $('#inputPassword').val();
    if (studentNumber === '') {
      $('.label-username').html('用户名不能为空!');
      $('#inputPassword').val('');
      $('.label-username').focus();
    } else if (usernameTypeValidate()) {
      $('.label-username').html('用户名不合法!请重新输入...');
      $('#inputPassword').val('');
      $('#inputUsername').val('');
      $('.label-username').focus();
    } else if (studentPassword === '') {
      $('.label-username').html('密码不能为空!');
      $('#inputUsername').val('');
      $('.label-username').focus();
    } else if (studentPassword.length < 6 || studentPassword.length > 12) {
      $('.label-username').html('用户名或密码错误!请重新输入...');
      $('#inputPassword').val('');
      $('#inputUsername').val('');
      $('.label-username').focus();
    } else {
      studentLoginRequsest(studentNumber,studentPassword);
    }
  });
});
