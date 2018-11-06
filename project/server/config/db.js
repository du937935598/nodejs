//db.js
var mysql = require('mysql');

exports.createConn = function(options){
    var client = mysql.createConnection(options);
    return client;
};

exports.getQuery = function (client, selectstatement,callback){
    client.query(selectstatement,function(errs,rows,fields){
        if(errs){
            callback(errs);
        }
        if(rows){
            callback(rows);
        }
        client.release();
    });
};

exports.end=function(client){
    client.end(function(err){
        if(err)  return;
    });
};