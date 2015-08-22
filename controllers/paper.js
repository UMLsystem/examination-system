var models = require('../models');
var Paper = models.paper;
var QuestionPaper = models.question_paper;
var Question = models.question;
var Type = models.type;

function PaperController(){

}
PaperController.prototype.getContent = function(){
  var ques = [];
  //var exa_id = req.exa_id;
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
}

module.exports = PaperController;
