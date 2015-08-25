var express = require('express');
var router = express.Router();

var UserValidateController = require('../../controllers/user-validate-controller');
var userValidateController = new UserValidateController();

router.post('/',userValidateController.onValidate);

module.exports = router;
