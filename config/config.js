require('dotenv').config();
var path = require('path');
var env = process.env.NODE_ENV || 'development';
var rootPath = path.normalize(__dirname + '/..');

var config = {
    development: {
        ROOT: rootPath,
        SECRET_KEY: process.env.SECRET_KEY,
        SERVER_PORT: process.env.SERVER_PORT
    },

    test: {
        ROOT: rootPath,
        SECRET_KEY: process.env.SECRET_KEY_TEST,
        SERVER_PORT: process.env.SERVER_PORT_TEST
    },
};

module.exports = config[env];