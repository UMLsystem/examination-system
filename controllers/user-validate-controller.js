var models = require('../models');
var User = models.User;

function UserValidateController() {}

UserValidateController.prototype.onValidate = function(req, res) {
  var user = req.body;
  User.findAll({
    where: {
      userNumber:parseInt(user.userNumber),
      userPassword: user.userPassword
    }
  }).then(function(data) {
    if (data.length > 0) {
      res.cookie('userId', data[0].dataValues.userId);
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
