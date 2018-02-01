angular.module('main').controller('UserCtrl', ['$scope', 'UserServ', function($scope, UserServ) {
    $scope.users = [];

    function readRecords() {
        $scope.users = [];

        UserServ.readRecords()
            .then(function(response) {
                $scope.users = response;
            });
    }

    readRecords();
}]);