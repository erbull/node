//
var fs = require("fs");
var express = require("express");
var path = require('path');
var app = express();
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get("/", function(rq, rs){
    fs.readFile("index.html", function(err, data){
        rs.write(data);
        rs.end();
    });
});

app.listen(process.env.PORT);
