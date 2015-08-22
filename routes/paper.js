var express = require('express');
var router = express.Router();
var models = require('../models');
var Paper = models.paper;
var QuestionPaper = models.question_paper;
var Question = models.question;
var Type = models.type;

router.get('/', function(req, res, next) {
  var ques = [];
  var exa_id = req.exa_id;
  var exa_id = 1;
  Paper.findById(exa_id).then(function(data) {
    paper_id = data.dataValues.pap_id;
    console.log(paper_id);
    QuestionPaper.findAll({
      where: {
        pap_id: paper_id
      }
    }).then(function(questions) {
      questions.forEach(function(val) {
        Question.findById(val.dataValues.que_id).then(function(que) {
          console.log(que.dataValues);
          ques.push(que.dataValues);
          Type.findById(que.dataValues.type_id).then(function(type){
            console.log(type.dataValues);
          });
        });
      })
    }).done(function() {
      res.render('paper')
    });
  });
});
// router.get('/', function(req, res, next) {
//   res.render('paper');
// });

// function getPaperContent(type){
//
// }
module.exports = router;
