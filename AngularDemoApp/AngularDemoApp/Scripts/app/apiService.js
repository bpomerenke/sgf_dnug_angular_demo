(function () {
    'use strict';

    var angularDemoApp = angular.module('AngularDemoApp');

    angularDemoApp.service('apiService', function ($http) {

        var _getLists = function() {
            return $http({ method: "GET", url: "api/v1/lists" }).then(function (response) { return response.data; }, function (response) { return console.log("something went wrong");});
        }
        return {
            getLists: _getLists
        }
    });
})();