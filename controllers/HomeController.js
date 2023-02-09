var path = require('path');
var express = require("express");
var router = express.Router();

module.exports.home = function(rq, rs){
    rs.render("index");
}

router.get("/", module.exports.home);
module.exports = router;

