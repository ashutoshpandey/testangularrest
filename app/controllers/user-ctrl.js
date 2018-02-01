var path = require('path');
var express = require('express');

var router = express.Router();
var root = path.normalize(__dirname + '/../..');
var constant = require(root + '/app/util/constants.js');

var service = require(constant.USER_SERVICE_FILE);

module.exports = function(app) {
    app.use(constant.USER_PATH, router);
};

/**********************************************************************************************************/

/* 
    GET: /user
*/
router.route('/read').get(function(req, res) {
    service.readRecords(req)
        .then(function(result) {
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.write(JSON.stringify(result));
            res.end();
        });
});