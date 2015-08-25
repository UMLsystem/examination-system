var models = require('../models');
var Student = models.Students;

function StudentValidateController() {}

StudentValidateController.prototype.onValidate = function(req, res) {
  var student = req.body;
  var obj;
  Student.findAll({
    where: {
      studentNumber: student.studentNumber,
      studentPassword: student.studentPassword
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

module.exports = StudentValidateController;
