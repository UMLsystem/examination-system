function userLoginValidate() {
  $("form :input").blur(function() {
    $(this).parent().find(".formtips").remove();
    var that = this;
    var arrId = {
      '#inputUsername': "请输入用户名",
      '#inputPassword': "请输入密码"
    };
    for (var i in arrId) {
      if ($(that).is(i)) {
        if (that.value === "") {
          $(that).parent().prepend("<span class='formtips onEmpty'>" + arrId[i] + "</span>");
        }
      }
    }
  }).keyup(function() {
    $(this).triggerHandler("blur");
  }).focus(function() {
    $(this).triggerHandler("blur");
  });
}


function userLoginRequsest(userNumber, userPassword) {
  $.post('/user-validate', {
    userNumber: userNumber,
    userPassword: userPassword
  }, function(resq) {
    if (resq.status === CONSTANT.OK) {
      $.cookie('userNumber', resq.data.userNumber);
      $.cookie('userName', resq.data.userName);
      if (resq.data.userRole === 'teacher') {
        location.href = "teacher";
      } else if (resq.data.userRole === 'student') {
        location.href = "paper-list";
      } else if (resq.data.userRole === 'admin') {
        location.href = "teacher";
      }
    } else {
      $('#inputUsername').parent().find(".formtips").remove();
      $('#inputUsername').parent().prepend("<span class='formtips onEmpty'>" + "用户名或密码错误!" + "</span>");
      $('#inputPassword').val('');
      $('#inputUsername').val('');
    }
  });
}


$(function() {
  userLoginValidate();
  $('#submit').on('click', function() {
    var userNumber = $('#inputUsername').val();
    var userPassword = $('#inputPassword').val();
    if (!(userNumber === '' || userPassword === '')) {
      userLoginRequsest(userNumber, userPassword);
    } else if (userPassword === '') {
      $('#inputPassword').parent().find(".formtips").remove();
      $('#inputPassword').parent().prepend("<span class='formtips wq'>" + "请输入密码" + "</span>");
    }
    $('#inputUsername').focus();
  });
});
