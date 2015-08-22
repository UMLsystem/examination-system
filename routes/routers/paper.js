var express = require('express');
var router = express.Router();


var PaperController = require('../../controllers/paper');
var paperController = new PaperController();

 router.get('/', paperController.getContent);
// router.get('/',function(req,res,next){
//   res.render('paper')
// });

module.exports = router;
