$(function() {
    $('tbody td').on('click', function() {
        var status = this.innerHTML.split('<')[0];
        var temp = status;
        
        $('.check').on('click', function() {
            if (temp === 'false') {
                alert('未开放！')
            } else {
                $(location).attr('href', '/');
            }
        });
    });
});
