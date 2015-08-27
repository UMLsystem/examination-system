var id = $.cookie('userName');

$(function() {
    document.getElementById('welcome').innerHTML = id;
});
