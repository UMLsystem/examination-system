var express = require('express');
var router = express.Router();

var ScoreController =require('../../controllers/score-controller');
var scoreController = new ScoreController();

router.post('/',scoreController.markExam);

module.exports = router;
