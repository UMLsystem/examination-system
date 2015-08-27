var models = require('../models');
var Sequelize = require('sequelize');
var Paper = models.Paper;
var QuestionPaper = models.QuestionPaper;
var Question = models.Question;
var Option = models.Option;
var Type = models.Type;
var types = [];

function PaperController() {}

getAllTypes();

function getAllTypes() {
  Type.getAllTypes().then(function(data) {
    types = data.map(function(val) {
      return val.dataValues;
    });
  });
}

function getQuestionContents(data) {
  var paperContent = {};
  data.forEach(function(val) {
    processData(val, paperContent);
  });
  return paperContent;
}


function processData(val, paperContent) {
  types.forEach(function(type) {
    if (type.id === val.typeId) {
      var key = type.typeName;
      paperContent[key] = paperContent[key] || [];
      paperContent[key].push({
        content: val.question,
        options: val.options,
        id: val.id
      });
    }
  });
}

PaperController.prototype.show = function(req, res) {
  var examId = req.query.examId;

  getQuestions(examId).then(function(data) {
    questions = data.map(function(val) {
      return val.dataValues.Questions[0].dataValues;
    });
    var ids = questions.map(function(val) {
      return val.id;
    });
    return Option.findAll({
      questionId: {
        $in: ids
      }
    });
  }).then(function(data) {
    var options = data.map(function(val) {
      return val.dataValues;
    });
    var contents = getContent(questions, options);
    var paperContent = getQuestionContents(contents);
    res.render('paper', {
      blanks: paperContent.blank,
      singleChoices: paperContent.singleChoices,
      multipleChoices: paperContent.multipleChoices
    });
  });
}

function getQuestions(examId) {
  return QuestionPaper.findAll({
    include: [{
      model: Paper,
      where: {
        examId: examId,
        id: Sequelize.col('QuestionPaper.paperId')
      }
    }],
    include: [{
      model: Question,
      where: {
        id: Sequelize.col('QuestionPaper.questionId')
      }
    }]
  })
}


function getContent(questions, options) {
  var contents = [];
  options.forEach(function(option) {
    contents = questions.map(function(question) {
      if (option.questionId === question.id) {
        question['options'] = question['options'] || [];
        question['options'].push(option.option);
      }
      return question;
    });
  });
  return contents;
}
module.exports = PaperController;
