var express = require('express');
var router = express.Router();


var PaperController = require('../../controllers/teacher');
var paperController = new TeacherController();

router.get('/', paperController.getContent);

module.exports = router;
