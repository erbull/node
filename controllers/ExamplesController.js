var path = require('path');
var express = require("express");
var router = express.Router();

module.exports.calculator = function(rq, rs){
    rs.render("examples/calculator");
}

module.exports.cube = function(rq, rs){
    rs.render("examples/cube");
}

module.exports.getset = function(rq, rs){
    rs.render("examples/getset");
}

module.exports.sign = function(rq, rs){
    rs.render("examples/sign");
}

router.get("/calculator", module.exports.calculator);
router.get("/cube", module.exports.cube);
router.get("/getset", module.exports.getset);
router.get("/sign", module.exports.sign);
module.exports = router;

