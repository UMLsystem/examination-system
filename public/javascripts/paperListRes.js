$.session.set('stuId', 'stuId');

var stuId = $.session.get('stuId');
$.get('/lookPaper', {stuId: stuId}, function (resp) {

});


$('.startExam').on('click',function () {

});
