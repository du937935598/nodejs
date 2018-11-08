var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express demo'
  });
});
// https: //www.jb51.net/article/111989.htm
module.exports = router;