function usernameTypeValidate() {
  var userNumber = $('#inputUsername').val();
  var arr = userNumber.split('');
  var flag = false;
  arr.forEach(function(val) {
    if (!(val.charCodeAt() >= 48 && val.charCodeAt() <= 57)) {
      flag = true;
    }
  });
  return flag;
}


function studentLoginRequsest(userNumber, userPassword) {
  $.post('/user-validate', {
    userNumber: userNumber,
    userPassword: userPassword
  }, function(resq) {
    if (resq.obj.status === 200) {
      $.cookie('username', resq.obj.data.userNumber, {
        expires: 1,
        path: '/'
      });
      $.cookie('password', resq.obj.data.userPassword, {
        expires: 1,
        path: '/'
      });
      $.cookie('userid', resq.obj.data.id, {
        expires: 1,
        path: '/'
      });  // $.cookie('username', resq.obj.data.userNumber, {
        expires: 1,
        path: '/'
      });
      $.cookie('password', resq.obj.data.userPassword, {
        expires: 1,
        path: '/'
      });
      $.cookie('userid', resq.obj.data.id, {
        expires: 1,
        path: '/'
      });
      if (resq.obj.data.userRole === 'teacher') {
        location.href = "teacher";
      } else if (resq.obj.data.userRole === 'student') {
        location.href = "teacher";
      } else if (resq.obj.data.userRole === 'admin') {
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
    // var studentPassword = $.md5($('#inputPassword').val());
    if (userNumber === '') {
      $('.label-username').html('用户名不能为空!');
      $('#inputPassword').val('');
      $('.label-username').focus();
    } else if (usernameTypeValidate()) {
      $('.label-username').html('用户名不合法!请重新输入...');
      $('#inputPassword').val('');
      $('#inputUsername').val('');
      $('.label-username').focus();
    } else if (userPassword === '') {
      $('.label-username').html('密码不能为空!');
      $('.label-username').focus();
    } else if (userPassword.length < 6 || userPassword.length > 12) {
      $('.label-username').html('用户名或密码错误!请重新输入...');
      $('#inputPassword').val('');
      $('#inputUsername').val('');
      $('.label-username').focus();
    } else {
      studentLoginRequsest(userNumber, userPassword);
    }
  });
});
