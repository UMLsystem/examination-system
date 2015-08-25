var express = require('express');
var router = express.Router();

var TeacherValidateController = require('../../controllers/teacher-validate-controller');
var teacherValidateController = new TeacherValidateController();

router.post('/',teacherValidateController.onValidate);

module.exports = router;
