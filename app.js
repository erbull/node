//
//var http = require('http');
var fs = require('fs');
var express = require("express");
var path = require('path');
var app = express();
app.use('/public', express.static(path.join(__dirname, 'public')));
//var server = http.createServer(function(rq, rs){
//    rs.write("Mehaba");
//    rs.end();
//});

app.get("/", function(rq, rs){
    fs.readFile("index.html", function(err, data){
        rs.write(data);
        rs.end();
    });
});

//server.listen(5000);
server.listen(process.env.PORT);
