var fs = require('fs');
var http = require('http');
var path = require('path');
var helmet = require('helmet');
var express = require('express');
var root = path.normalize(__dirname + '/');
var constant = require(root + '/app/util/constants.js');

var config = require(constant.APP_CONFIG_FILE);

var app = express();
app.use(helmet());

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type");
    return next();
});

require('./config/express')(app, config);

http.createServer(app).listen(config.SERVER_PORT, function() {
    console.log('Server listening http on port ' + config.SERVER_PORT);
});

module.exports = app;