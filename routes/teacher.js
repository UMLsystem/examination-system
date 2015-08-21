var express = require('express');
var router = express.Router();
var models = require('../models');
var Exam = models.exam;

Exam.findAll().then(function(data) {
    console.log(data[1].dataValues);
});

router.get('/', function(req, res, next) {
  res.render('teacher');
});

module.exports = router;
