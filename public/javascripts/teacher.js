$(function() {
    $('.check').on('click', function() {
        var status = $(this).data('status');

        if (status === false) {
            alert('未开放！');
        } else {
            $(location).attr('href', '/');
        }
    });
});
