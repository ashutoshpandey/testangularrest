var glob = require('glob');
var path = require('path');
var express = require('express');
var compress = require('compression');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');

var root = path.normalize(__dirname + '/..');
var constant = require(root + '/app/util/constants.js');

module.exports = function(app, config) {
    var env = process.env.NODE_ENV || 'development';
    app.locals.ENV = env;
    app.locals.ENV_DEVELOPMENT = env == 'development';

    app.use(bodyParser.json({
        limit: '5mb'
    }));

    app.use(session({
        resave: true,
        saveUninitialized: true,
        secret: config.SECRET_KEY
    }));

    app.use(bodyParser.urlencoded({
        limit: '2mb',
        extended: true // using qs library
    }));

    app.use(express.static(path.join(root, 'public')));
    app.set('views', path.join(root, '/app/views'));
    app.set('view engine', 'ejs');

    /* bind controllers */
    var controllers = glob.sync(config.ROOT + '/app/controllers/*.js');
    controllers.forEach(function(controller) {
        require(controller)(app);
    });

    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err,
                title: 'error'
            });
        });
    }

    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {},
            title: 'error'
        });
    });

    return app;
};