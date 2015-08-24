var models = require('../models');
var Paper = models.paper;
var QuestionPaper = models.question_paper;
var Question = models.question;
var Type = models.type;
var contents = [];
var types = [];

function PaperController() {}


PaperController.prototype.show = function(req, res) {
  var exa_id = 1; //var exa_id = req.query.exa_id
  getAllTypes();
  Paper.findById(exa_id).then(function(data) {
    return QuestionPaper.getQuestionIds(exa_id, data);
  }).then(function(data) {
    return Question.getQuestionContents(data)
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
      questionId: val.dataValues.que_id,
      content: val.dataValues.que_content,
      type_id: val.dataValues.typ_id
    };
  }).forEach(function(val) {
    processinData(val, paperContent);
  });
  return paperContent;
}

function processinData(val, paperContent) {
  types.forEach(function(type) {
    if (type.typ_id === val.type_id) {
      var key = type.typ_name;
      var result = val.content.split('?');
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
