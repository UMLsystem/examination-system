var models = require('../models');
var Exam = models.exam;

function TeacherController() {

}
TeacherController.prototype.getList = function(req, res, next) {
    var array = [];

    Exam.findAll().then(function(data) {
        data.forEach(function(val) {
            array.push(val.dataValues);
        });
    }).done(function() {
        res.render('teacher', {
            array: array
        });
    });
};

module.exports = TeacherController;
