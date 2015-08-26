var models = require('../models');
var Sequelize = require('sequelize');
var Exam = models.Exam;
var TeacherExam = models.TeacherExam;

function TeacherController() {

}

TeacherController.prototype.getList = function(req, res, next) {
  var array = [];

  Exam.findAll({
    include: [{
      model: TeacherExam,
      where: {
        examId: Sequelize.col('Exam.id')
      }
    }]
  }).then(function(data) {
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
