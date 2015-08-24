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
  Type.getAllTypes();
  Paper.findById(exa_id).then(function(data) {
    return QuestionPaper.getQuestionIds(exa_id, data);
  }).then(function(data) {
    return Question.getQuestionContents(data)
  }).then(function(data) {
    return getQuestionContents(data);
  }).then(function(data) {
    var paperContent = getPaperContent(contents);
    res.render('paper', {
      blank: paperContent.blank,
      single: paperContent.single,
      multiple: paperContent.multiple
    });
  });
};



function getQuestionContents(data) {
  contents = data.map(function(val) {
    return {
      questionId: val.dataValues.que_id,
      content: val.dataValues.que_content,
      type_id: val.dataValues.typ_id
    };
  });
}

function getPaperContent(contents) {
  var paperContent = {};

  contents.forEach(function(val) {
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
        questionId: val.questionId,
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
