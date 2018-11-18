var express = require('express');
var router = express.Router();
var db = require('../config/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/index', { title: 'users demo' });
});

router.get('/login', function(req, res, next) {
  res.render('admin/login', { title: 'users demo' });
});

router.post('/login/identityKey', function(req, res, next) {
  var sess = req.session;

  var sql = "select * from user where name='"+req.body.name+"' and pwd='"+req.body.pwd+"'";
  // res.jsonp({sql: sqls});
  db.getQuery(sql, function (result) {
    if(result.length != 0){
      req.session.regenerate(function(err) {
        if(err){
            return res.json({ret_code: 2, ret_msg: '登录失败'});                
        }
        req.session.loginUser = result[0].name;
        res.jsonp({ret_code: 0, ret_msg: '登录成功'});                           
      });
    }else{
      res.jsonp({ret_code: 1, ret_msg: '账号或密码错误'});
    }
  });
  
  // res.render('admin/login', { title: 'users demo' });
});

module.exports = router;
