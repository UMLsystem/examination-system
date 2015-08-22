var express = require('express');
var router = express.Router();

var PaperListQuery = require('../../controllers/paperList');
var query = new PaperListQuery();

router.get('/', function(req, res) {
  console.log(req.query.stuId + '7777');
  query.getList(req.query.stuId);
  res.render('paperList');
});

module.exports = router;
