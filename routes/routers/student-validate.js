var express = require('express');
var router = express.Router();

var StudentValidateController = require('../../controllers/student-validate-controller');
var studentValidateController = new StudentValidateController();

router.post('/',studentValidateController.onValidate);

module.exports = router;
