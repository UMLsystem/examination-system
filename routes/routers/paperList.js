var express = require('express');
var router = express.Router();

var PaperListQuery = require('../../controllers/paperList');
var query = new PaperListQuery();

router.get('/', query.getExamedList);

module.exports = router;
