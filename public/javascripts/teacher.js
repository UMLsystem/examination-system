function getStatus() {
    var statusList = [];
    $('table tbody tr').each(function() {
        var row = $("td", this);
        statusList.push({
            status: row.eq(2).text().trim(),
        });
    });
    return statusList;
}

$(function() {
    $('#check').on('click', function() {
        alert('hello');
    });
});
