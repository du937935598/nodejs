let user = require('./user');

console.log(`username:${user.userName}`);
console.log(`Im ${user.userName}, im say ${user.sayHello()}`);

let http = require('http');
let url = require('url');
let util = require  ('util');

let server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain; charset=utf-8");
    console.log(req.url);
    console.log(url.parse(req.url));
    console.log(util.inspect(url.parse(req.url)));
    res.end(util.inspect(url.parse(req.url)));
})


server.listen(1234,'127.0.0.1', () => {
    console.log("服务器已经运行，请打开浏览器，输入：http://127.0.0.1:3000")
})