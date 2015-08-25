$(function() {
    $('.check').on('click', function() {

        var status = $(this).data('status');

        if (status === false) {
            alert('未开放！');
            $(this).closest('td')[0].innerHTML='未考';
        } else {
            $(location).attr('href', '/');
        }
    });
});
