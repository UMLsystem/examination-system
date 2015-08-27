var stuId = $.cookie('stuId');

$(function() {
  $.get('/paper-list', {
    stuId: stuId
  }, function(resp) {

  });
  var examId = $('tbody tr').data('id');
  var examStatus = $('tbody tr').data('examStatus');

  if (examStatus === true) {
    $('.examStatus').text('已考');
    $('.check').val('查看试卷');
    $('.check').on('click', function() {
      $.get('/paperCheck', {
        examId: examId
      }, function(resp) {

      });
    });
  } else {
    $('.examStatus').text('未考');
    $('.check').val('开始考试');
    $('.check').on('click', function() {
      $.get('/paper', {
        examId: examId
      }, function(resp) {

      });
    });
  }
});
