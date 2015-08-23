var express = require('express');
var router = express.Router();

// res.render('add-question', { layout: null });

router.post('/', function(req, res, next) {

  var result = req.body;
  console.log('result=' + result);


  }
);
module.exports = router;
