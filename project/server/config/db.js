//db.js
var mysql = require('mysql');
var options = require('./database-default');

exports.createConn = function () {
    var client = mysql.createConnection(options.mysql);
    return client;
};

exports.getQuery = function (client, selectstatement, callback) {
    client.query(selectstatement, function (errs, rows, fields) {
        if (errs) {
            callback(errs);
        }
        if (rows) {
            callback(rows);
        }
    });
};

exports.end = function (client) {
    client.end(function (err) {
        if (err) return;
    });
};