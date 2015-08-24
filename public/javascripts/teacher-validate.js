function usernameValidate() {
  var username = $('#inputUsername').val();
  var arr = username.split('');
  var flag = false;
  console.log(arr);
  arr.forEach(function(val) {
    if (!((val.charCodeAt() >= 48 && val.charCodeAt() <= 57))) {
      flag = true;
      console.log(val.charCodeAt());
    }
  });
  console.log(flag);
  return flag;
}

$(function() {
  $('#submit').on('click', function() {
    var teacher_num = $('#inputUsername').val();
    // var password = $.md5($('#inputPassword').val());
    var teacher_password = $('#inputPassword').val();
    if (username === '') {
      $('.label-username').html('用户名不能为空!');
      $('#inputPassword').val('');
      $('.label-username').focus();
    } else if (usernameValidate()) {
      $('.label-username').html('用户名不合法!请重新输入...');
      $('#inputPassword').val('');
      $('#inputUsername').val('');
      $('.label-username').focus();
    } else if (password === '') {
      $('.label-username').html('密码不能为空!');
      $('#inputUsername').val('');
      $('.label-username').focus();
    } else if (password.length < 6 || password.length > 12) {
      $('.label-username').html('用户名或密码错误!请重新输入...');
      $('#inputPassword').val('');
      $('#inputUsername').val('');
      $('.label-username').focus();
    } else {
      $.post('/teacher-validate', {
        teacher_num: teacher_num,
        teacher_password: teacher_password
      }, function(resq) {
        if (resq.obj.status === 200) {
          $.cookie('teacher_num', resq.obj.data.teacher_num, {
            expires: 1,
            path: '/'
          });
          $.cookie('teacher_password', resq.obj.data.teacher_password, {
            expires: 1,
            path: '/'
          });
          $.cookie('teacher_id', resq.obj.data.teacher_id, {
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
  });
});
