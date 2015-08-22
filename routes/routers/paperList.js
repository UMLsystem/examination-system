var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('paperList');
});

module.exports = router;

// res.render('paperList',{exams:exams});
//
// app.get('/lookPaper', function (req,res) {
//   var stuId = req.query.stuId;
//   var examed,toexam;
//   var sql = "select exa_id, exa_name from exam,student_exam where stu_id="+stuId+",and status = 1";
//   conn.query(sql, function (err, rows, fields) {
//     if(err) throw err;
//     examed = rows;
//   });
//   var sql = "select exa_id, exa_name from exam,student_exam where stu_id="+stuId+",and status = 0";
//   conn.query(sql, function (err, rows, fields) {
//     if(err) throw err;
//     toexam = rows;
//   });
//
// });
