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
      console.log("resq");
    });
  });
});
