$(function() {
    $('table tbody tr').each(function() {
           var row = $("td", this);
           var status = row.eq(2).text().trim();
           if(status === "true") {
               row.eq(2).text('已考');
           }else {
               row.eq(2).text('未考');
           }
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
