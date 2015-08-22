var express = require('express');
var router = express.Router();
var models = require('../models');
var Student = models.student;

router.get('/', function(req, res, next) {
    var student = req.query;
    var obj;
    Student.findAll({where:{stu_id:student.stu_id}}).then(function(data) {
        if(data.length > 0 && data.stu_pwd === student.stu_pwd){

        }
    }).done(function() {
        res.render('teacher', {
            array: array
        });
    });
});

module.exports = router;
