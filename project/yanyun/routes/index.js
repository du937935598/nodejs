var express = require('express');
var router = express.Router();

var db = require('../config/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function (req, res, next) {
  var selectstatement = "select * from user";
  db.getQuery(selectstatement, function (result) {
    res.end(JSON.stringify(result));
  });
  // res.render('index', { title: 'Express' });
});

module.exports = router;
