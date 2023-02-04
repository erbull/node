//

var fs = require('fs');
var express = require("express");
var path = require('path');
var app = express();
app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/', (rq, rs) => {
    fs.readFile("index.html", function(err, data){
        rs.render(data);
        rs.end();
    });
});

//server.listen(5000);
app.listen(process.env.PORT || 8080);
