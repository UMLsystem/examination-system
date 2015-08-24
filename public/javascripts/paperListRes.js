$.cookie('stuId',1);
var stuId = $.cookie('stuId');
$(function () {
  console.log(stuId);
  $.get('/paperList', {stuId : stuId}, function (resp) {

  });
});
