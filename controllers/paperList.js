var models = require('../models');
var StudentExam = models.StudentExam;
var Exam = models.exam;


function PaperListQuery() {

}

PaperListQuery.prototype.getList = function(stu_id) {
  var exams = [];
  var examed, toexam;
  exams.examed = StudentExam.findAll({
    where: {
      stu_id: 1
    }
  }).then(function(data) {
    console.log(data);
  })
};

module.exports = PaperListQuery;

// router.get('/paperList', function() {
//   var stuId = req.query.stuId;
//   var stuId = 1;
//   var examed, toexam;
//   var sql = "select exam.exa_id, exa_name from exam,student_exam where stu_id=" + stuId + "and exam.status = 1";
//   conn.query(sql, function(err, rows, fields) {
//     if (err) throw err;
//     exams.examed = rows;
//   });
//   var sql = "select exam.exa_id, exa_name from exam,student_exam where stu_id=" + stuId + "and exam.status = 0";
//   conn.query(sql, function(err, rows, fields) {
//     if (err) throw err;
//     exams.toexam = rows;
//   });
//   res.render('paperList', {
//     exams: exams
//   });
//   console.log(exams);
// });
