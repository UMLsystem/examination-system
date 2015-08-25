var id = $.cookie('username');

$(function() {
    document.getElementById('welcome').innerHTML = id;
});
