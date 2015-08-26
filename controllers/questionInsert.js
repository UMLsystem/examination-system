var models = require('../models');
var Question = models.question;
var Type = models.type;


function QuestionInsert(){

}

QuestionInsert.prototype.insertFill = function(req,res){

   var form = req.body;



   var que = Question.create({typ_id: 1,tea_id:1,que_content:form.question,que_answer:form.answer}).then(function(){
     res.render('add-success');
   });

};
QuestionInsert.prototype.insertSingle = function(req,res){

   var form = req.body;



   var que = Question.create({typ_id: 2,tea_id:1,que_content:form.question+'#'+form.optionOne+'#'+form.optionTwo+'#'+form.optionThree+'#'+form.optionFour,que_answer:form.singleChoices}).then(function(){
       res.render('add-success');
   });

};
QuestionInsert.prototype.insertMultiple = function(req,res){

   var form = req.body;


   var que = Question.create({typ_id: 3,tea_id:1,que_content:form.question+'#'+form.optionOne+'#'+form.optionTwo+'#'+form.optionThree+'#'+form.optionFour,que_answer:form.multipleChoices[0]+form.multipleChoices[1]+form.multipleChoices[2]}).then(function(){
       res.render('add-success');
   });

};
module.exports = QuestionInsert;
