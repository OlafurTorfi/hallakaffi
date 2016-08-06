'use strict';
var db = process.env.environment === 'production'? require('./server/db') : require('./server/mockdb');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sql = require('./server/sql/queries');

var app = express();
var port = 5000;

app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

var restQuery = function(func){
  return function(req,res){
    func().then(function(result){
      res.json(result);
    })
  }
}

app.use('/users/get', restQuery(db.getCustomers));
app.use('/users/new', restQuery(db.getUsers));

app.get('/',function(req, res){
    res.sendFile('./index.html');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
// module.exports = app;
