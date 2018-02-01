angular.module('main').service('HttpServ', ['$http', '$q', 'CONSTANTS', function($http, $q, CONSTANTS) {
    var httpRequest = {
        sendRequest: sendRequest
    };

    function sendRequest(requestObject) {
        var deferred = $q.defer();

        $http({
                method: requestObject.REQUEST_METHOD,
                url: CONSTANTS.SERVER.ROOT + requestObject.API_URL,
                data: requestObject.REQUEST_DATA
            })
            .then(function(response) {
                console.log(response);
                if (response && response.data) {
                    deferred.resolve(response.data);
                } else {
                    deferred.reject(response);
                }
            }, function(response) {
                deferred.reject(response);
            });

        return deferred.promise;
    }

    return httpRequest;
}]);