var express = require('express');
var router = express.Router();

var TeacherController =require('../../controllers/teacher-controller');
var teacherController = new TeacherController();

router.get('/',teacherController.getList);

module.exports = router;
