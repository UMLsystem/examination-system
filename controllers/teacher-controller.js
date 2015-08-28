var models = require('../models');
var Sequelize = require('sequelize');
var User = models.User;
var Exam = models.Exam;

function TeacherController() {

}

TeacherController.prototype.getList = function(req, res, next) {
    Exam.findAll({
        include: [{
            model: User,
            where: {
                id: Sequelize.col('Exam.userId')
            }
        }]
    }).then(function(data) {
        return data.map(function(val) {
            if(val.dataValues.status === true) {
                val.dataValues.status = "已考";
            }else {
                val.dataValues.status = "未考";
            }
            return val.dataValues;
        });
    }).done(function(data) {
        res.render('teacher', {
            array: data
        });
    });
};

module.exports = TeacherController;
