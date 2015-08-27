$(function() {
  $('#submit').on("click", function() {
    var answer = $('form').serialize();
    $.ajax({
      url: '/score',
      data: answer,
      type: 'POST',
      success: function(result) {
        $('#score').html(result);
      }
    });
  });
});
