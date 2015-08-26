var models = require('../models');
var Sequelize = require('sequelize');
var User = models.User;
var Exam = models.Exam;

function TeacherController() {

}

TeacherController.prototype.getList = function(req, res, next) {
  //var array = [];

  User.findAll({
    include: [{
      model: Exam,
      where: {
        userId: Sequelize.col('User.id')
      }
    }]
  }).then(function(data) {
    return data.map(function(val) {
      return val.dataValues;
    });
}).done(function(data) {
    res.render('teacher', {
      array: data
    });
  });


};

module.exports = TeacherController;
