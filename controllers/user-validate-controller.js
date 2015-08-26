var models = require('../models');
var CONSTANT = require('../public/javascripts/all-constant.js');
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
      console.log(CONSTANT);
      res.send({
        status: CONSTANT.OK,
        message: 'success',
        data: data[0].dataValues
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
