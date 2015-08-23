var models = require('../models');
var Paper = models.paper;
var QuestionPaper = models.question_paper;
var Question = models.question;
var Type = models.type;
var contents = [];


function PaperController() {

}


PaperController.prototype.getContent = function(req, res) {
  var exa_id = 1;
  Paper.findById(exa_id).then(function(data) {
    return getPaperId(exa_id, data);
  }).then(function(data) {
    return getQuestionIds(data);
  }).then(function(data) {
    return getQuestionContents(data);
  }).then(function(data) {
    var paperContent = getPaperContent(contents)
      //  res.send(paperContent);
    res.send(paperContent);
  })
}

function getPaperId(exa_id, data) {
  var paper_id = data.dataValues.pap_id;
  return QuestionPaper.findAll({
    where: {
      pap_id: paper_id
    }
  })
}

function getQuestionIds(data) {
  var question_ids = data.map(function(val) {
    return val.dataValues.que_id;
  })
  return Question.findAll({
    where: {
      que_id: {
        $in: question_ids
      }
    }
  })
}

function getQuestionContents(data) {
  contents = data.map(function(val) {
    return {
      content: val.dataValues.que_content,
      type_id: val.dataValues.typ_id
    };
  })

}

function getPaperContent(contents) {
  var paperContent = {
    'blank': [],
    'single': [],
    'mult': []
  };
  contents.forEach(function(val) {
    if (val.type_id === 1) {
      paperContent['blank'].push(val.content);
    } else if (val.type_name === 2) {
      paperContent[singleSelect].push(val.content);
    } else if (val.type_name === 3) {
      paperContent[mulSelect].push(val.content);
    }
  });
  return paperContent;
}

module.exports = PaperController;
