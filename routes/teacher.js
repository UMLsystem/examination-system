var express = require('express');
var router = express.Router();
var models = require('../models');
var Exam = models.exam;



router.get('/', function(req, res, next) {
    var array = [];
    Exam.findAll().then(function(data) {
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
