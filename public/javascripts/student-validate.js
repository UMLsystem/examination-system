$(function() {
  $('#submit').on('click', function() {
    var username = $('#inputUsername').val();
    // var password = $.md5($('#inputPassword').val());
    var password = $('#inputPassword').val();
    alert(password);
    $.post('/student', {
      username: username,
      password: password
    }, function(resq) {
      if (resq.obj.status === '200') {
        $.cookie('username', resq.obj.data.stu_num, {
          expires: 1,
          path: '/'
        });
        $.cookie('password', resq.obj.data.stu_pwd, {
          expires: 1,
          path: '/'
        });
        $.cookie('userid', resq.obj.data.stu_id, {
          expires: 1,
          path: '/'
        });
        location.href = "teacher";
      } else {
        $('#label-password').val('用户名或密码错误!请重新输入...');
      }
    });
  });


});
