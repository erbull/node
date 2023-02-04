//
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(rq, rs){
    rs.write("Merhaba");
    rs.end(rq.url);
});

server.listen(process.env.PORT);
