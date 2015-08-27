var models = require('../models');
var User = models.User;
var Exam = models.Exam;
var Sequelize = require('sequelize');


function PaperListQuery() {

}

PaperListQuery.prototype.getDetails = function(req, res, next) {
  res.send('paperCheck page');
}

module.exports = PaperListQuery;
