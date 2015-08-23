var models = require('../models');
var Student = models.student;

function StudentValidateController() {

}
StudentValidateController.prototype.onValidate = function(req, res) {
  var student = req.body;
  var obj;
  Student.findAll({
    where: {
      stu_num: student.username
    }
  }).then(function(data) {
    if (data.length > 0 && data.stu_pwd === student.password) {
      obj={status:200,message:'success',data:data};
    } else {
      obj={status:404,message:'fail',data:data};
    }
  }).done(function() {
    res.send({
      obj: obj
    });
  });
};

module.exports = StudentValidateController;
