angular.module('main').service('UserServ', ['HttpServ', 'CONSTANTS', function(HttpServ, CONSTANTS) {
    /*
     *   Get all users
     */
    function readRecords() {
        var requestObject = {
            API_URL: CONSTANTS.API_URLS.USER + 'read',
            REQUEST_METHOD: CONSTANTS.REQUEST_METHODS.GET
        };

        return HttpServ.sendRequest(requestObject);
    }

    return {
        readRecords: readRecords
    };
}]);