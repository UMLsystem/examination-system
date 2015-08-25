var models = require('../models');
var Teacher = models.Teachers;

function TeacherValidateController() {}

TeacherValidateController.prototype.onValidate = function(req, res) {
  var teacher = req.body;
  var obj;
  Teacher.findAll({
    where: {
      teacherNumber: teacher.teacherNumber,
      teacherPassword: teacher.teacherPassword
    }
  }).then(function(data) {
    if (data.length > 0) {
      obj={status:200,message:'success',data:data[0].dataValues};
    } else {
      obj={status:404,message:'fail'};
    }
  }).done(function() {
    res.send({
      obj: obj
    });
  });
};

module.exports = TeacherValidateController;
