var models = require('../models');
var User = models.users;

function UserValidateController() {}

UserValidateController.prototype.onValidate = function(req, res) {
  var user = req.body;
  var obj;
  User.findAll({
    where: {
      userNumber: parseInt(user.userNumber),
      userPassword: user.userPassword
    }
  }).then(function(data) {
    if (data.length > 0) {
      res.send({
        status: 200,
        message: 'success',
        data: data[0].dataValues
      });
    } else {
      res.send({
        status: 404,
        message: 'fail'
      });
    }
  });
};


module.exports = UserValidateController;
