var stuId = $.cookie('stuId');

$(function() {
  $.get('/paper-list', {
    stuId: stuId
  }, function(resp) {});

  var examStatus;
  $('table tbody tr').each(function(i) {
    $("tbody tr td:first-child")[i].innerHTML = i + 1;
    var row = $('td', this);
    var examStatus = $(document.getElementsByName("status")[i]).data("status");

    if (examStatus === false) {
      row.eq(2).text('未考');
      row.eq(3).children().val('开始考试');
      $(row.eq(3).children()).on('click', function() {
        $.get('/paper', {
          examId: examId
        }, function(resp) {

        });
      });
    } else {
      row.eq(2).text('已考');
    }
  });
});
