var models = require('../models');
// var StudentExam = models.StudentExam;
var User = models.User;
var Exam = models.Exam;
var Sequelize = require('sequelize');


function PaperListQuery() {

}

PaperListQuery.prototype.getExamedList = function(req, res, next) {
  var examList = {};
  User.findAll({
    where : {
      id : 1
    },
    include : [
      {
        model : Exam,
        where :{userId: Sequelize.col('User.id')}
      }
    ]
  }).then(function(data) {
    examList = data.map(function(val) {
      return val.dataValues.Exam.dataValues;
    });
    res.render('paper-list',{examList:examList});
  });
};

module.exports = PaperListQuery;
