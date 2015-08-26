var stuId = $.cookie('stuId');

$(function () {
  $.get('/paperList', {stuId : stuId}, function (resp) {

  });

  $('.check').on('click', function () {
    var status = $(this).data('status');
    if(false === status) {
      var examId = $(this).parent().parent().data('id');
      $.get('/paper', {examId : examId}, function (resp) {

      });
    } else {
      alert('You have attended this exam.');
    }
  });

});
