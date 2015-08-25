var models = require('../models');
var Question = models.question;
var Type = models.type;


function QuestionInsert(){

}

QuestionInsert.prototype.insertFill = function(req,res){

   var form = req.body;
   $.cookie('tea_id',1);

var tea_id = $.cookie('tea_id');

   var que = Question.create({typ_id: 1,tea_id:tea_id,que_content:form.question,que_answer:form.answer});
   res.render('add-success');
};
QuestionInsert.prototype.insertSingle = function(req,res){

   var form = req.body;
   $.cookie('tea_id',1);

   var tea_id = $.cookie('tea_id');

   var que = Question.craete({typ_id: 2,tea_id:tea_id,que_content:form.question+'#'+form.option0+'#'+form.option1+'#'+form.option2+'#'+form.option3,que_answer:form.singChoice1});
    res.render('add-success');
};
QuestionInsert.prototype.insertMultiple = function(req,res){

   var form = req.body;
   $.cookie('tea_id',1);

var tea_id = $.cookie('tea_id');

   var que = Question.create({typ_id: 3,tea_id:tea_id,que_content:form.question+'#'+form.option0+'#'+form.option1+'#'+form.option2+'#'+form.option3,que_answer:form.multipleChoice1[0]+form.multipleChoice1[1]+form.multipleChoice1[2]});
    res.render('add-success');
};
module.exports = QuestionInsert;
