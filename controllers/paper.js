var models = require('../models');
var Paper = models.Papers;
var QuestionPaper = models.QuestionPapers;
var Question = models.Questions;
var Type = models.Types;
var contents = [];
var types = [];

function PaperController() {}


PaperController.prototype.show = function(req, res) {
  var examId = 1; //var exa_id = req.query.exa_id
  getAllTypes();
  Paper.findById(examId).then(function(data) {
    return QuestionPaper.getQuestionIds(data);
  }).then(function(data) {
    return Question.getQuestionContents(data);
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
    return {
      questionId: val.dataValues.questionId,
      question: val.dataValues.question,
      typeId: val.dataValues.typeId
    };
  }).forEach(function(val) {
    processinData(val, paperContent);
  });
  return paperContent;
}

function processinData(val, paperContent) {
  types.forEach(function(type) {
    if (type.typeId === val.typeId) {
      var key = type.typeName;
      var result = val.content.split('#');
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
