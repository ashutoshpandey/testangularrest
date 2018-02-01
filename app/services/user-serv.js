var q = require('q');
var http = require('http');
var path = require('path');
var root = path.normalize(__dirname + '/../..');
var constant = require(root + '/app/util/constants.js');

var readRecords = function(req) {
    var url = 'https://jsonplaceholder.typicode.com/posts';

    return callRest(url)
        .then(function(result) {
            var data = JSON.parse(result);
            return data;
        });
};

function callRest(url) {
    return new Promise((resolve, reject) => {
        // select http or https module, depending on reqested url
        var lib = url.startsWith('https') ? require('https') : require('http');
        var request = lib.get(url, (response) => {
            // handle http errors
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(new Error('Failed to load page, status code: ' + response.statusCode));
            }
            // temporary data holder
            const body = [];
            // on every content chunk, push it to the data array
            response.on('data', (chunk) => body.push(chunk));
            // we are done, resolve promise with those joined chunks
            response.on('end', () => resolve(body.join('')));
        });
        // handle connection errors of the request
        request.on('error', (err) => reject(err))
    })
};

module.exports = {
    readRecords: readRecords
};