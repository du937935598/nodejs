var http = require('http');

http.get('http://imooc.com/u/card', function(res){
    let data = "";
    res.on("data", function(chunk){
        data += chunk;
    })

    res.on("end", function(){
        let result = JSON.parse(data);
        console.log(result);
    })

})