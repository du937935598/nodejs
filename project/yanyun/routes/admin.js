var express = require('express');
var router = express.Router();
var db = require('../config/db');

// 首页
router.get('/', function(req, res, next) {
  var sess = req.session;
  var loginUser = sess.loginUser;
  var userid = sess.userid;
  var isLogined = !!loginUser;
  if(!isLogined){
    return res.redirect('/admin/login');
  }
  return res.render('admin/index', { title: 'users demo1', userid: loginUser, userids: userid});
});

// 登录退出
router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err) {
    if(err){
      return res.json({ret_code: 2, ret_msg: '退出登录失败'});
    }
    req.session.loginUser = null;
    req.session.userid = null;
    res.clearCookie(identityKey);
    return res.json({ret_code: 0, ret_msg: '退出登录成功'});
  });
});

// 登录界面
router.get('/login', function(req, res, next) {
  var sess = req.session;
  var loginUser = sess.loginUser;
  var isLogined = !!loginUser;
  if(isLogined){
    return res.redirect('/admin/');
  }
  return res.render('admin/login', { title: 'users demo' });
});

// 用户认证
router.post('/login/identityKey', function(req, res, next) {
  var sess = req.session;
  var sql = "select * from user where name='"+req.body.name+"' and pwd='"+req.body.pwd+"'";
  db.query(sql, function (err,result) {
    if(result.length != 0){
      req.session.regenerate(function(err) {
        if(err){
            return res.json({ret_code: 2, ret_msg: '登录失败'});                
        }
        req.session.loginUser = req.body.name;
        req.session.userid = result[0].id;
        return res.jsonp({ret_code: 0, ret_msg: '登录成功',result: result});                           
      });
    }else{
      return res.jsonp({ret_code: 1, ret_msg: '账号或密码错误'});
    }
  });
});

// 订单列表
router.get('/addForm', function(req, res, next) {
  var sess = req.session;
  var loginUser = sess.loginUser;
  var isLogined = !!loginUser;
  if(!isLogined){
    return res.redirect('/admin/login');
  }
  return res.render('admin/addForm', { title: 'users demo1' });
});


module.exports = router;
