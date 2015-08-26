$(function() {
  var cource;
  $('#cource').change(function() {
    cource = $('#cource').val();
    var sections = $("section");
    for (var i = 0; i < sections.length; i++) {
      var id = sections[i].getAttribute('id');
      if (id == cource) {
        sections[i].style.display = "block";
        continue;
      }
      sections[i].style.display = "none";
    }
  });
});
