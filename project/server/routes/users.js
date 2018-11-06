var express = require('express');
var router = express.Router();

var options = require('../config/database-default')
var db = require('../config/db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.render('users', { results: results });
  // req.param('page')
  var client = db.createConn(options.mysql);
  var selectstatement = "select * from";
  db.getQuery(client, selectstatement.function(result){
    res.send(result);
    db.end(client);
  });
  // res.send('respond with a resource');
  // res.render('users', { title: 'users demo' });
});

router.get('/gets', function(req, res, next) {
  // res.render('users', { results: results });
  // req.param('page')
  let arr = {
    page: req.param('page'),
    size: req.param('size'),
  }
  res.send(arr);
  // res.send('respond with a resource');
  // res.render('users', { title: 'users demo' });
});

router.post('/posts', function(req, res, next) {
  // res.render('users', { results: results });
  // req.param('page')
  let arr = {
    page: req.body.page,
    body: req.body,
    size: req.body.size,
  }
  console.log(req.body);
  res.send(arr);
  // res.send('respond with a resource');
  // res.render('users', { title: 'users demo' });
});

module.exports = router;
