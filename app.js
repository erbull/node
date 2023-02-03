//

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    fs.readFile('index.html', function(err, data){
        res.write(data);
        res.end("bitti");
    })
});

server.listen(80);
