var path = require('path');
var express = require("express");
var router = express.Router();
var mailer = require("nodemailer");
var transporter = mailer.createTransport({
    service : 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth : {
        user: 'erbull@gmail.com',
        pass: 'hiaaetccjsoxyxko'
    }
});

module.exports.getContact = function(rq, rs){
    rs.render("contact");
}

module.exports.postContact = function(rq, rs){
    var mailOptions = {
        from: 'Administrator',
        to: 'erbull@msn.com',
        subject: rq.body.subject,
        html: '<p>' + rq.body.name + '</p><p>' + rq.body.mail + '</p>' + rq.body.mailbody
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            rs.render("contact", {
                isSend: 'false'
            });
        } else {
            rs.render("contact", {
                isSend: 'true'
            });
        }
    });
}

router.get("/", module.exports.getContact);
router.post("/", module.exports.postContact);
module.exports = router;