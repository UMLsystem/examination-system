var express = require('express');
var router = express.Router();

var PaperCheck = require('../../controllers/paper-check');
var paperCheck = new PaperCheck();

router.get('/', paperCheck.getDetails);

module.exports = router;
