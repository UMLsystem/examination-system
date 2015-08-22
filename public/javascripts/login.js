$(function() {
  $('button').on('click', function() {
    var username = $('#inputUsername').val();
    var password = $('#inputPassword').val();
    if (username.length === 0) {
      $('.label-username').html('用户名不能为空!');
    } else if (password.length === 0) {
      $('.label-password').html('密码不能为空!');
    } else {
      $.get('/login', {
        username: username,
        password: password
      }, function(resq) {
        if (resq.stu_num === username && resq.stu_pwd === password) {

        } else {
          $('.label-username').html('用户名或密码错误,请重新输入!');
        }
      });
    }
  });
});
