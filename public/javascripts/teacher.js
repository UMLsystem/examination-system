$(function() {
    $('table tbody tr').each(function(i) {
        $("tbody tr td:first-child")[i].innerHTML = i+1;
    });

    $('.check').on('click', function() {
        var status = $(this).data('status');

        if (status === false) {
            alert('还未进行该门课程考试');
        } else {
            $(location).attr('href', '/');
        }
    });
});
