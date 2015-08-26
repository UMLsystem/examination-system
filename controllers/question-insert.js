var models = require('../models');
var Question = models.Questions;
var Type = models.Type;
var Option = models.Options;

function QuestionInsert(){

}

QuestionInsertion.prototype.insertFill = function(req, res) {
  res.cookie('tecaherId', 8);
  var teacherId = req.cookies.teacherId;
  var form = req.body;
  var FILL_ID = 1;
  var TYPE_ID = FILL_ID;
  var question = Question.create({
    typeId: TYPE_ID,
    teacherId: teacherId,
    question: form.question,
    answer: form.answer
  }).then(function() {
    if (question) {
      res.render('add-success');
    } else {
      res.render('failture');
    }
  });
};

QuestionInsertion.prototype.insertSingle = function(req, res) {
  res.cookie('tecaherId', 8);
  var teacherId = req.cookies.teacherId;
  var form = req.body;
  var SINGLE_ID = 2;
  var TYPE_ID = SINGLE_ID;
  var question = Question.build({
    typeId: TYPE_ID,
    teacherId: teacherId,
    question: form.question,
    answer: form.singleChoices
  });
  question.save().then(function() {

    return Option.bulkCreate([{
      option: form.optionOne,
      questionId: question.id
    }, {
      option: form.optionTwo,
      questionId: question.id
    }, {
      option: form.optionThree,
      questionId: question.id
    }, {
      option: form.optionFour,
      questionId: question.id
    }]);
  }).then(function() {
    if (question) {
      res.render('add-success');
    } else {
      res.render('failture');
    }
  });

};

QuestionInsertion.prototype.insertMultiple = function(req, res) {
  res.cookie('tecaherId', 8);
  var teacherId = req.cookies.teacherId;
  var form = req.body;
  var string = '';
  form.multipleChoices.forEach(function(multiple) {
    string += multiple;
  });
  var MULTIPLE_ID = 3;
  var TYPE_ID = MULTIPLE_ID;
  var question = Question.create({
    typeId: TYPE_ID,
    teacherId: teacherId,
    question: form.question,
    answer: string
  });
  question.save().then(function() {
    return Option.bulkCreate([{
      option: form.optionOne,
      questionId: question.id
    }, {
      option: form.optionTwo,
      questionId: question.id
    }, {
      option: form.optionThree,
      questionId: question.id
    }, {
      option: form.optionFour,
      questionId: question.id
    }]).then(function() {
      if (question) {
        res.render('add-success');
      } else {
        res.render('failture');
      }
    });
  });
};
module.exports = QuestionInsert;
