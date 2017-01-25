var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var session = require('express-session');
var path = require("path");
var port = 9000;

var app = express ();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client/static")));
app.use(express.static(path.join(__dirname, "./server/config")));
app.use(session({secret: 'codingdojorocks'}));

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(port, function () {
	console.log("Listening on port", port);
});
