var express = require('express');
var router = express.Router();
var models = require('../models');
var Student = models.student;

router.get('/', function(req, res, next) {
    var student = req.query;
    Student.findAll({where:{stu_id:student.stu_id,}}).then(function(data) {
        data.forEach(function(val) {
            array.push(val.dataValues);
        });
    }).done(function() {
        res.render('teacher', {
            array: array
        });
    });
});

module.exports = router;
