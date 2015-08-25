function teacherTypeValidate() {
  var teacherNumber = $('#inputUsername').val();
  var arr = teacherNumber.split('');
  var flag = false;
  arr.forEach(function(val) {
    if (!(val.charCodeAt() >= 48 && val.charCodeAt() <= 57)) {
      flag = true;
    }
  });
  return flag;
}


function teacherLoginRequest(teacherNumber,teacherPassword){
  $.post('/teacher-validate', {
    teacherNumber: teacherNumber,
    teacherPassword: teacherPassword
  }, function(resq) {
    if (resq.obj.status === 200) {
      $.cookie('username', resq.obj.data.teacherNumber, {
        expires: 1,
        path: '/'
      });
      $.cookie('password', resq.obj.data.teacherPassword, {
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
    var teacherNumber = $('#inputUsername').val();
    // var password = $.md5($('#inputPassword').val());
    var teacherPassword = $('#inputPassword').val();
    if (teacherNumber === '') {
      $('.label-username').html('用户名不能为空!');
      $('#inputPassword').val('');
      $('.label-username').focus();
    } else if (teacherTypeValidate()) {
      $('.label-username').html('用户名不合法!请重新输入...');
      $('#inputPassword').val('');
      $('#inputUsername').val('');
      $('.label-username').focus();
    } else if (teacherPassword === '') {
      $('.label-username').html('密码不能为空!');
      $('#inputUsername').val('');
      $('.label-username').focus();
    } else if (teacherPassword.length < 6 || teacherPassword.length > 12) {
      $('.label-username').html('用户名或密码错误!请重新输入...');
      $('#inputPassword').val('');
      $('#inputUsername').val('');
      $('.label-username').focus();
    } else {
      teacherLoginRequest(teacherNumber,teacherPassword);
    }
  });
});
