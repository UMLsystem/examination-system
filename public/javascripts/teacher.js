$(function() {
    $('.check').on('click', function() {

        var status = $(this).data('status');

        if (status === false) {
            alert('未开放！');
          //  $(this).closest('td').html()='未考';
        } else {
            $(location).attr('href', '/');
        }
    });
});
