var path = require('path');
var express = require("express");
var router = express.Router();

module.exports.fundamentals = function(rq, rs){
    rs.render("programming/fundamentals");
}

module.exports.giris = function(rq, rs){
    rs.render("programming/fundamentals/giris");
}

module.exports.c = function(rq, rs){
    rs.render("programming/fundamentals/c");
}

module.exports.datastructure = function(rq, rs){
    rs.render("programming/fundamentals/datastructure");
}

module.exports.cmd = function(rq, rs){
    rs.render("programming/fundamentals/cmd");
}

module.exports.hello = function(rq, rs){
    rs.render("programming/fundamentals/hello");
}

router.get("/", module.exports.fundamentals);
router.get("/giris", module.exports.giris);
router.get("/c", module.exports.c);
router.get("/datastructure", module.exports.datastructure);
router.get("/cmd", module.exports.cmd);
router.get("/hello", module.exports.hello);

module.exports = router;