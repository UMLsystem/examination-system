var models = require('../models');
var Sequelize = require('sequelize');
var Paper = models.Paper;
var QuestionPaper = models.QuestionPaper;
var Question = models.Question;
var Type = models.Type;
var contents = [];
var types = [];

function PaperController() {}

getAllTypes();

PaperController.prototype.show = function(req, res) {
  var exa_id = req.query.exa_id;
  Paper.findById(examId).then(function(data) {
    return QuestionPaper.findAll({
      where: {
        paperId: data.dataValues.id
      },
      include: [{
        model: Question,
        where: {
          id: Sequelize.col('QuestionPaper.questionId')
        }
      }]
    });
  }).then(function(data) {
    var paperContent = getQuestionContents(data);
    res.render('paper', {
      blank: paperContent.blank,
      single: paperContent.single,
      multiple: paperContent.multiple
    });
  });
};

function getAllTypes() {
  Type.getAllTypes().then(function(data) {
    types = data.map(function(val) {
      return val.dataValues;
    });
  });
}

function getQuestionContents(data) {
  var paperContent = {};
  data.map(function(val) {
    return val.dataValues.Questions[0].dataValues;
  }).forEach(function(val) {
    processData(val, paperContent);
  });
  return paperContent;
}

function processData(val, paperContent) {
  console.log(val);
  types.forEach(function(type) {
    if (type.id === val.typeId) {
      var key = type.typeName;
      var result = val.question.split('#');
      paperContent[key] = paperContent[key] || [];
      paperContent[key].push({
        content: result[0],
        'A': result[1],
        'B': result[2],
        'C': result[3],
        'D': result[4]
      });
    }
  });
}

module.exports = PaperController;
