var express = require('express');
var router = express.Router();

var PaperController = require('../../controllers/paper');
var paperController = new PaperController();

router.get('/', paperController.show);

module.exports = router;
