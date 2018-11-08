// 'use strict';

var fs = require('fs');

fs.readFile('./nodejs/node.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

fs.readFile('./nodejs/a.png', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.length);
    }
});

var data = '这是写入内容，请注意查收！';
// fs.writeFileSync('./nodejs/node.txt', data, function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('写入成功！');
//     }
// });

fs.stat('./nodejs/node.txt',function(err,stat){
    if(err){
        console.log(err);
    }else{
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
})

// 打开一个流:
var rs = fs.createReadStream('./nodejs/node.txt', 'utf-8');
var ws = fs.createWriteStream('./nodejs/copy.txt', 'utf-8');

rs.pipe(ws);

rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});

var url = require('url');

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));