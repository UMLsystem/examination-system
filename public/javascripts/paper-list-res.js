var stuId = $.cookie('stuId');

$(function() {
  $('table tbody tr').each(function(i) {
    $('td', this).on('click', '.check', function() {
      $.get('/paper', {
        examId: $(this).data('examId')
      }, function(resp) {

      });
    });
  });
});
