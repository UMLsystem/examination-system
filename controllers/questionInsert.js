var models = require('../models');
var Question = models.Questions;
var Type = models.type;


function QuestionInsert(){

}

QuestionInsert.prototype.insertFill = function(req,res){

   var form = req.body;



   var que = Question.create({typeId: 1,teacherId:1,question:form.question,answer:form.answer}).then(function(){
     res.render('add-success');
   });

};
QuestionInsert.prototype.insertSingle = function(req,res){

   var form = req.body;



   var que = Question.create({typeId: 2,teacherId:1,question:form.question+'#'+form.optionOne+'#'+form.optionTwo+'#'+form.optionThree+'#'+form.optionFour,answer:form.singleChoices}).then(function(){
       res.render('add-success');
   });

};
QuestionInsert.prototype.insertMultiple = function(req,res){

   var form = req.body;


   var que = Question.create({typeId: 3,teacherId:1,question:form.question+'#'+form.optionOne+'#'+form.optionTwo+'#'+form.optionThree+'#'+form.optionFour,answer:form.multipleChoices[0]+form.multipleChoices[1]+form.multipleChoices[2]}).then(function(){
       res.render('add-success');
   });

};
module.exports = QuestionInsert;
