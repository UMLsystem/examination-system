$(function() {
  $('#submit').on('click', function() {
    var username = $('#inputUsername').val();
    var password = $.md5($('#inputPassword').val());
    alert(password);
    $.get('/user', {
      username: username,
      password: password
    }, function(resq) {
    });
  });
});


//
// $().ready(function() {
//   $("#form-signin").validate({
//     rules: {
//       inputUsername: "required",
//       inputPassword: {
//         required: true,
//         minlength: 6,
//         maxlength: 12
//       },
//     },
//     messages: {
//       inputUsername: "请输入姓名",
//       inputPassword: {
//         required: "请输入密码",
//         minlength: jQuery.format("密码不能小于6个字符"),
//         maxlength: jQuery.format("密码不能大于12个字符")
//       },
//     }
//   });
// });
