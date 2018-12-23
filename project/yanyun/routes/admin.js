var express = require('express');
var router = express.Router();
var fs = require("fs");
var multiparty = require('multiparty');
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
      return res.jsonp({ret_code: 2, ret_msg: '退出登录失败'});
    }
    res.clearCookie('idkey')
    return res.jsonp({ret_code: 0, ret_msg: '退出登录成功'});
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
  return res.render('admin/login');
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

// 文件上传
router.post('/file_upload',function(req, res,next){
  //生成multiparty对象，并配置上传目标路径
  var form = new multiparty.Form({uploadDir: './public/files'});
  form.parse(req, function(err, fields, files) {
    var filesTmp = JSON.stringify(files);
    if(err){
      console.log('parse error: ' + err);
    } else {
      var extName = '';  //后缀名
      switch (JSON.parse(filesTmp).file[0].headers['content-type']) {
        case 'image/pjpeg':
          extName = 'jpg';
          break;
        case 'image/jpeg':
          extName = 'jpg';
          break;
        case 'image/png':
          extName = 'png';
          break;
        case 'image/x-png':
          extName = 'png';
          break;
      }
      if(extName.length == 0){
        return res.jsonp({ret_code: 2, message: "只支持png和jpg格式图片!"});
      }
      var inputFile = JSON.parse(filesTmp).file[0];
      var defaultPath = inputFile.path;
      var imagePath = new Date().getTime() + '-' + Math.floor((Math.random()*9+1)*1000) + '.' + extName;
      var newPath = './public/files/' + imagePath;
      var userPath = '/files/' + imagePath;
      //重命名为真实文件名
      fs.rename(defaultPath, newPath, function(err) {
        if(err){
          return res.jsonp({ret_code: 1, message: "上传失败！"});
        } else {
          return res.jsonp({ret_code: 0, message: "上传成功！", defaultPath: defaultPath, newPath: newPath,userPath: userPath});
        }
      });
    }
  });
})

// 订单列表
router.get('/addForm', function(req, res, next) {
  var sess = req.session;
  var loginUser = sess.loginUser;
  var isLogined = !!loginUser;
  if(!isLogined){
    return res.redirect('/admin/login');
  }
  return res.render('admin/addForm');
});

// 订单添加
router.post('/addEdit', function(req, res, next) {
  var sess = req.session;
  var sql = "insert menuList(title,imageUrl,descs) value ('"+req.body.title+"','"+req.body.files+"','"+req.body.desc+"')";
  // return res.jsonp({sql: sql})
  db.query(sql, function (err,result) {
    if(result){
      return res.jsonp({ret_code: 0, ret_msg: '添加成功',result: result});                           
    }else{
      return res.jsonp({ret_code: 1, ret_msg: '添加失败',result: result});                           
    }
  });
});

module.exports = router;
