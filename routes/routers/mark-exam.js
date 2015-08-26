var express = require('express');
var router = express.Router();

var ScoreController =require('../../controllers/score-controller');
var scoreController = new ScoreController();

router.get('/',scoreController.markExam);

module.exports = router;
