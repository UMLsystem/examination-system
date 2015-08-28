var models = require('../models');
var User = models.User;
var Exam = models.Exam;
var Sequelize = require('sequelize');

function PaperListQuery() {

}

PaperListQuery.prototype.getExamedList = function(req, res, next) {
  Exam.findAll({
    where: {
      userId: 1
    }
  }).then(function(data) {
    var examList = data.map(function(val, index) {
      val.dataValues.examId = val.dataValues.id;
      val.dataValues.id = index + 1;
      if(val.dataValues.status === true) {
        val.dataValues.status = '已考';
        val.dataValues.button = '查看试卷';
      } else {
        val.dataValues.status = '未考';
        val.dataValues.button = '开始考试';
      }
      return val.dataValues;
    });
    res.render('paper-list', {
      examList: examList
    });
  })
};

module.exports = PaperListQuery;
