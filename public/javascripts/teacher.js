$(function() {
    $('.check').on('click', function() {
        var status = this.innerHTML.split('<')[0];

        if (status === 'false') {
            alert('未开放！')
        } else {
            $(location).attr('href', '/');
        }
    });
});
