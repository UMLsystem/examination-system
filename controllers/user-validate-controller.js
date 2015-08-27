var models = require('../models');
var CONSTANT = require('../public/javascripts/all-constant.js');
var User = models.User;

function UserValidateController() {}

UserValidateController.prototype.onValidate = function(req, res) {
  var user = req.body;
  User.findOne({
    where: {
      userNumber: user.userNumber,
      userPassword: user.userPassword
    }
  }).then(function(data) {
    if (data !== null) {
      res.cookie('userId', data.dataValues.userId);
      res.cookie('userName', data.dataValues.userName);
      res.send({
        status: CONSTANT.OK,
        message: 'success',
        data: data.dataValues
      });
    } else {
      res.send({
        status: CONSTANT.NOT_FOUND,
        message: 'fail'
      });
    }
  });
};


module.exports = UserValidateController;
