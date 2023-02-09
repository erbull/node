//
var express = require("express");
var app = express();
var path = require('path');
var router = express.Router();
app.set('view engine', 'ejs');
var ejsLayout = require('express-ejs-layouts');
var bodyParser = require('body-parser');

var homeController = require('./controllers/HomeController');
var computerController = require('./controllers/ComputerController');
var fundamentalsController = require('./controllers/FundamentalsController');
var examplesController = require('./controllers/ExamplesController');
var contactController = require('./controllers/ContactController');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(ejsLayout);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/", homeController);
app.use("/computer", computerController);
app.use("/programming/fundamentals", fundamentalsController);
app.use("/examples", examplesController);
app.use("/contact", contactController);

app.listen(process.env.PORT || 8080);
