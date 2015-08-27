var models = require('../models');
var User = models.User;
var Exam = models.Exam;
var Sequelize = require('sequelize');


function PaperListQuery() {

}

PaperListQuery.prototype.getExamedList = function(req, res, next) {
  var examList = {};
  Exam.findAll({
    where: {
      userId: 1
    }
  }).then(function(data) {
    examList = data.map(function(val) {
      return val.dataValues;
    });
    res.render('paper-list', {
      examList: examList
    });
  })
};

module.exports = PaperListQuery;
