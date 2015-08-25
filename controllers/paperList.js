var models = require('../models');
var StudentExam = models.studentExam;
var Exam = models.exam;


function PaperListQuery() {

}

PaperListQuery.prototype.getExamedList = function(req, res, next) {
  var examList = {};
  StudentExam.findAll({
    where : {
      studentId : req.studentId
    }
  }).then(function(data) {
    var examIds = data.map(function (val) {
      examList.examId = val.examId;
      examList.status = val.status;
      return val.examId;
    });
    Exam.findAll({
      where : {
        id : {
          $in : examIds
        }
      }
    }).then(function(data) {
      var examList = data.map(function(val) {
        examList.examName = val.examName;
        return examList;
      })
      res.render('paperList',{examList:examList});
    })
  });
}

module.exports = PaperListQuery;
