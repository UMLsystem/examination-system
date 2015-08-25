var models = require('../models');
var StudentExam = models.student_exam;
var Exam = models.exam;


function PaperListQuery() {
  // var exams = [];
}

// PaperListQuery.prototype.getExamedList = function(req, res, next) {
//   var exams = [];
//   var examList = {};
//   StudentExam.findAll({
//     where : {
//       studentId : req.studentId
//     }
//   }).then(function(data) {
//     var examIds = data.map(function (val) {
//       examList.examId = val.examId;
//       examList.status = val.status;
//       return val.examId;
//     });
//     Exam.findAll({
//       where : {
//         id : {
//           $in : examIds
//         }
//       }
//     }).then(function(data) {
//       var examList = data.map(function(val) {
//         examList.examName = val.examName;
//         return examList;
//       })
//       res.render('paperList',{examList:examList});
//     })
//   });
// }

PaperListQuery.prototype.getExamedList = function(req, res, next) {
  var exams = {
    examed: [],
    toexam: []
  };
  var singleExamed = {};
  StudentExam.findAll({
    where: {
      stu_id: 1,
      status: true
    }
  }).then(function(data) {
    var examIds = data.map(function(val) {
      return val.exa_id;
    });
    Exam.findAll({
      where: {
        exa_id: {
          $in: examIds
        }
      }
    }).then(function(data) {
      data.map(function(val) {
        singleExamed.exa_name = val.exa_name;
        singleExamed.exa_id = val.exa_id;
        return singleExamed;
      })
      exams.examed.push(singleExamed);
    })
    StudentExam.findAll({
      where: {
        stu_id: 1,
        status: false
      }
    }).then(function(data) {
      var examIds = data.map(function(val) {
        return val.exa_id;
      });
      Exam.findAll({
        where: {
          exa_id: {
            $in: examIds
          }
        }
      }).then(function(data) {
        data.map(function(val) {
          singleExamed.exa_name = val.exa_name;
          singleExamed.exa_id = val.exa_id;
          return singleExamed;
        })
        exams.toexam.push(singleExamed);
        console.log(exams);
        return exams;
        res.render('/paperList',{exams:exams});
      })
    });
  });
}
module.exports = PaperListQuery;
