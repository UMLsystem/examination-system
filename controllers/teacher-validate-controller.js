var models = require('../models');
var Teacher = models.teacher;

function TeacherValidateController() {}

TeacherValidateController.prototype.onValidate = function(req, res) {
  var teacher = req.body;
  console.log(req);
  var obj;
  Teacher.findOne({
    where: {
      teacher_num: teacher.teacher_num,
      teacher_password: teacher.teacher_password
    }
  }).then(function(data) {
    if (data.length > 0) {
      obj = {
        status: 200,
        message: 'success',
        data: data[0].dataValues
      };
    } else {
      obj = {
        status: 404,
        message: 'fail'
      };
    }
  }).done(function() {
    res.send({
      obj: obj
    });
  });
};

module.exports = TeacherValidateController;
