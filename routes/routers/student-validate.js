var express = require('express');
var router = express.Router();

var StudentValidateController = require('../../controllers/student-validate-controller');
var studentValidateController = new StudentValidateController();

router.get('/student-validate',studentValidateController.onValidate);

module.exports = router;
