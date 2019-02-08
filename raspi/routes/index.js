var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (process.env.FIRST_CONNECT == "true"){
    res.render('index', { title: 'Express' });
  }else{
  res.render('firstConnection', { title: 'Express' });
   process.env.FIRST_CONNECT= "true";
   console.log( process.env.FIRST_CONNECT)

  }
});

module.exports = router;
