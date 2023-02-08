var path = require('path');
var express = require("express");
var router = express.Router();

module.exports.computer = function(rq, rs){
    rs.render("computer");
}

module.exports.mimari = function(rq, rs){
    rs.render("computer/mimari");
}

module.exports.os = function(rq, rs){
    rs.render("computer/os");
}

module.exports.folders = function(rq, rs){
    rs.render("computer/folders");
}

module.exports.command = function(rq, rs){
    rs.render("computer/command");
}

module.exports.datastorage = function(rq, rs){
    rs.render("computer/datastorage");
}

module.exports.path = function(rq, rs){
    rs.render("computer/path");
}

module.exports.sayi = function(rq, rs){
    rs.render("computer/sayi");
}

router.get("/", module.exports.computer);
router.get("/mimari", module.exports.mimari);
router.get("/os", module.exports.os);
router.get("/folders", module.exports.folders);
router.get("/command", module.exports.command);
router.get("/datastorage", module.exports.datastorage);
router.get("/path", module.exports.path);
router.get("/sayi", module.exports.sayi);
module.exports = router;

