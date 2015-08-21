var app = require("app.js");
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'exam',
  password: 'exam',
  database: 'examination-system'
});

connection.connect();


app.get("/", function(req, res) {
  var papercontent = [];
  var exa_id = req.query.id;
  var sql1 = "select pap_id from paper where exa_id=" + exa_id;
  connection.query(sql1, function(err, rows) {
    var pap_id = rows;
    var sql2 = "select que_id from student_answer where pap_id=" + pap_id;
    connection.query(sql2, function(err, rows) {
      var que_ids = rows;
      que_ids.forEAch(function(que_id) {
        var sql3 = "select que_content,que_anwser ,typ_id from question where que_id=" + que_id;
        connection.query(sql3, function(err, rows) {
          var paper_content = [];
          var question = rows;
          var sql4 = "select typ_name from question_type where type_id=" + type_id;
          connection.query(sql4, function(err, rows) {
            typ_name = rows;
            paper_content.push({
              content: question.que_content,
              answer: question.que_answer,
              type: typ_name
            });
            res.render("paper", {
              questions: paper_content
            })
            connection.end();
          });
        });
      });
      // var sql3 = "select que_content,que_anwser ,typ_id from question where que_id=" + que_id;
      // connection.query(sql3, function(err, row) {
      //   var questions = rows;
      //   questions.forEach(function(question) {
      //     var type_id = question.typ_id;
      //     var sql4 = "select typ_name from question_type where type_id=" + type_id;
      //     connection.query(sql4, function(err, rows) {
      //       question.typ_name = rows;
      //     });
      //   });
      //   res.render("paper", {
      //     questions: questions
      //   })
      //   connection.end();
      // });
    });
  });
});

app.listen(3000);
console.log("listening on http://localhost:3000");
