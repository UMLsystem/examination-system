var models = require('../models');
var Sequelize = require('sequelize');
var Exam = models.Exam;
var TeacherExam = models.TeacherExams;

function TeacherController() {

}
TeacherController.prototype.getList = function(req, res, next) {
    var array = [];

    Exam.findAll().then(function(data) {
        array = data.map(function(val) {
            return val.dataValues;
        });
    }).done(function() {
        res.render('teacher', {
            array: array
        });
    });


};

module.exports = TeacherController;
