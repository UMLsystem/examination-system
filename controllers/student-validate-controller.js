var models = require('../models');
var Student = models.student;

function StudentValidateController() {

}
StudentValidateController.prototype.onValidate = function(req, res) {
  var student = req.query;
  console.log(111111111111111111111111);
  var obj;
  Student.findAll({
    where: {
      stu_num: student.username
    }
  }).then(function(data) {
    if (data.length > 0 && data.stu_pwd === student.password) {
      obj.status = 200;
      obj.message = 'success';
    } else {
      obj.status = 404;
      obj.message = 'fail';
    }
  }).done(function() {
    res.send({
      obj: obj
    });
  });
};

module.exports = StudentValidateController;
