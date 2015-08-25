var models = require('../models');
var Paper = models.paper;
var QuestionPaper = models.question_paper;
var Question = models.question;
var Type = models.type;
var contents = [];
var types = [];

function PaperController() {}

PaperController.prototype.getContent = function(req, res) {
  var exa_id = 1; //var exa_id = req.query.exa_id
  getAllTypes();
  Paper.findById(exa_id).then(function(data) {
    return getPaperId(exa_id, data);
  }).then(function(data) {
    return getQuestionIds(data);
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

function getAllTypes() {
  return Type.findAll().then(function(data) {
    types = data.map(function(val) {
      return val.dataValues;
  });
});
}

function getPaperId(exa_id, data) {
  var paper_id = data.dataValues.pap_id;
  return QuestionPaper.findAll({
    where: {
      pap_id: paper_id
    }
  });
}

function getQuestionIds(data) {
  var question_ids = data.map(function(val) {
    return val.dataValues.que_id;
  });
  return Question.findAll({
    where: {
      que_id: {
        $in: question_ids
      }
    }
  });
}

function getQuestionContents(data) {
  contents = data.map(function(val) {
    return {
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
