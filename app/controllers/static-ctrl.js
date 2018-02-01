var path = require('path');
var express = require('express');

var router = express.Router();
var root = path.normalize(__dirname + '/../..');
var constant = require(root + '/app/util/constants.js');

module.exports = function(app) {
    app.use('/', router);
};

/**********************************************************************************************************/

/* 
    GET: /
*/
router.route('/')
    .get(function(req, res) {
        res.sendFile(path.resolve('public/front/index.html'));
    });