var models = require('../models');
var StudentExam = models.StudentExam;
var Exam = models.Exam;
var Sequelize = require('sequelize');


function PaperListQuery() {

}

PaperListQuery.prototype.getExamedList = function(req, res, next) {
  var examList = {};
  StudentExam.findAll({
    where : {
      studentId : 1
    },
    include : [
      {
        model : Exam,
        where :{id: Sequelize.col('StudentExam.examId')}
      }
    ]
  }).then(function(data) {
    console.log(data.map(function(val) {
      return val.dataValues;
    });
    res.render('paperList',{examList:examList});
    );
  });
};

module.exports = PaperListQuery;
