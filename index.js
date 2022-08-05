var express = require('express');
var cookieParser = require('cookie-parser');
var videoRouter = require('./routes/video');
var admin = require("firebase-admin");
var serviceAccount = require("./videoLibraryKey.json");

var port = process.env.PORT || 5000;


//ADMIN SDK INITIALIZATION
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', videoRouter);

module.exports = app;
