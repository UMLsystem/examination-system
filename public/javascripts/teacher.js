$(function() {
    $('.check').on('click', function() {
        var status = $(this).data('status');

<<<<<<< b21e4e257d8393ce27b8c7ddbe308e03f87094f3
        if (status === false) {
=======
        if (status === 'false') {
>>>>>>> add table"subject"
            alert('未开放！');
        } else {
            $(location).attr('href', '/');
        }
    });
});
