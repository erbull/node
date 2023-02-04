//
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(rq, rs){
    rs.write(rq);
    rs.end();
});

server.listen(process.env.PORT || 8080);
