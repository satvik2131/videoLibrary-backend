var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var videoRouter = require('./routes/video');
var admin = require("firebase-admin");
var serviceAccount = require("./videoLibraryKey.json");

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

app.listen(5000,()=>{console.log("hola")});
// module.exports = app;
