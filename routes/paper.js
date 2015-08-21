var express = require('express');
var router = express.Router();
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'exam',
//   password: 'exam',
//   database: 'examination-system'
// });
//
// connection.connect();
//
// function getpaper_content(array) {
//   var result = {};
//   array.forEach(function(val) {
//     if (val.type === "text") {
//       result[blank].push({
//         id: val.id,
//         content: val.content,
//         type: val.type
//       });
//     } else if (val.type === "radio") {
//       result[singleselect].push({
//         id: val.id,
//         content: val.content,
//         type: val.type
//       });
//     } else if (val.type === "checkbox") {
//       result[mulselect].push({
//         id: val.id,
//         content: val.content,
//         type: val.type
//       });
//     }
//   });
//   return result;
// }
//
//
// router.get("/", function(req, res) {
//   var papercontent = [];
//   var exa_id = req.query.id;
//   var sql1 = "select pap_id from paper where exa_id=" + exa_id;
//   connection.query(sql1, function(err, rows) {
//     var pap_id = rows;
//     var sql2 = "select que_id from student_answer where pap_id=" + pap_id;
//     connection.query(sql2, function(err, rows) {
//       var que_ids = rows;
//       que_ids.forEAch(function(que_id) {
//         var sql3 = "select que_content,typ_id from question where que_id=" + que_id;
//         connection.query(sql3, function(err, rows) {
//           var array = [];
//           var question = rows;
//           var sql4 = "select typ_name from question_type where type_id=" + type_id;
//           connection.query(sql4, function(err, rows) {
//             typ_name = rows;
//             array.push({
//               id: que_id,
//               content: question.que_content,
//               type: typ_name
//             });
//             var paper_content = getpaper_content(array);
//           });
//         });
//       });
//       res.render("paper", {
//         questions: paper_content
//       })
//       connection.end();
//     });
//   });
// });
//
router.get('/', function(req, res, next) {
  res.render('paper');
});

module.exports = router;
