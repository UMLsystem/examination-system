$(function(){
  $(".pass").focus(function() {
    var txt_value = $(this).val();
    if (txt_value === "请在此输入密码") {
      $(this).val("");
    }
  });
  $(".pass").blur(function() {
    var txt_value = $(this).val();
    if (txt_value === "") {
      $(this).val("请在此输入密码");
    }
  });
});
