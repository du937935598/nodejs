let http = require('http');
let url = require('url');
let util = require  ('util');

let fs = require('fs');

let server = http.createServer((req,res) => {
    res.statusCode = 200;
    // res.setHeader("Content-Type","text/plain; charset=utf-8");
    var pathname = url.parse(req.url).pathname;
    console.log(pathname)
    fs.readFile(pathname.substring(1),function(err,data){
        if(err){
            res.writeHead(404,{
                'Content-Type': 'text/html'
            });
        }else{
            res.writeHead(200,{
                'Content-Type': 'text/html'
            })
            res.write(data.toString())
        }
        res.end();
    })
})


server.listen(1234,'127.0.0.1', () => {
    console.log("服务器已经运行，请打开浏览器，输入：http://127.0.0.1:1234")
})