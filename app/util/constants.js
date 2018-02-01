/* 
 *  This file contains project constants
 */
var path = require('path');
var root = path.normalize(__dirname + '/../..');

var utilPath = root + '/app/util/';
var configPath = root + '/config/';
var servicePath = root + '/app/services/';

/* ######################## PATHS ###################### */

exports.USER_PATH = '/user';

/* ######################## PATH CONSTANTS ###################### */

exports.UTIL_PATH = utilPath;
exports.SERVICE_PATH = servicePath;

/* ######################## FILES ###################### */

exports.APP_CONFIG_FILE = configPath + 'config.js';
exports.USER_SERVICE_FILE = servicePath + 'user-serv.js';