var express = require('express');
var router = express.Router();
var models = require('../../models');
var Student = models.student;

router.get('/student-validate', function(req, res, next) {
  var student = req.query;
  var obj;
  Student.findAll({
    where: {
      stu_id: student.stu_id
    }
  }).then(function(data) {
    if (data.length > 0 && data.stu_pwd === student.stu_pwd) {
      obj.status = 200;
      obj.message = 'success';
    } else {
      obj.status = 400;
      obj.message = 'fail';
    }
  }).done(function() {
    res.send({
      obj: obj
    });
  });
});

module.exports = router;
