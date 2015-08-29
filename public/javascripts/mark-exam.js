$(function() {
  $('#submit').on("click", function() {
    var answer = $('form').serialize();
    $.ajax({
      url: '/score',
      data: answer,
      type: 'POST',
      success: function(resp) {
        alert(resp.result);
        $('#score').html(resp.result);
      }
    });
  });
});
