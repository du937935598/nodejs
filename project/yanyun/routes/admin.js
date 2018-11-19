var express = require('express');
var router = express.Router();
var db = require('../config/db');

// 首页
router.get('/', function(req, res, next) {
  var sess = req.session;
  var loginUser = sess.loginUser;
  var isLogined = !!loginUser;
  if(!isLogined){
    res.redirect('/admin/login');
    return;
  }
  res.render('admin/index', { title: 'users demo1' });
});

// 登录界面
router.get('/login', function(req, res, next) {
  var sess = req.session;
  var loginUser = sess.loginUser;
  var isLogined = !!loginUser;
  if(isLogined){
    res.redirect('/admin/');
    return;
  }
  res.render('admin/login', { title: 'users demo' });
});

// 用户认证
router.post('/login/identityKey', function(req, res, next) {
  var sess = req.session;
  var sql = "select * from user where name='"+req.body.name+"' and pwd='"+req.body.pwd+"'";
  db.getQuery(sql, function (result) {
    if(result.length != 0){
      req.session.regenerate(function(err) {
        if(err){
            return res.json({ret_code: 2, ret_msg: '登录失败'});                
        }
        req.session.loginUser = req.body.name;
        res.jsonp({ret_code: 0, ret_msg: '登录成功',result: result});                           
      });
    }else{
      res.jsonp({ret_code: 1, ret_msg: '账号或密码错误'});
    }
  });
});

module.exports = router;
