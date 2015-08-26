var models = require('../models');
var Sequelize = require('sequelize');
var Type = models.Type;

function ScoreController() {

}
ScoreController.prototype.markExam = function(req, res, next) {
  res.send(req.body);
};


module.exports = ScoreController;
