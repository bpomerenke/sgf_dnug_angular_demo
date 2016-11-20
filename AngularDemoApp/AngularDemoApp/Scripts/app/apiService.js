(function () {
    'use strict';

    var angularDemoApp = angular.module('AngularDemoApp');

    angularDemoApp.service('apiService', function ($http) {
        var successCallback = function (response) { return response.data; };
        var failureCallback = function (response) { return console.log("something went wrong");}
        var _getLists = function() {
            return $http({ method: "GET", url: "api/v1/lists" }).then(successCallback, failureCallback);
        }
        var _addItem = function(listId, item) {
            return $http({ method: "POST", url: "api/v1/lists/" + listId + "/item", data: { name: item } }).then(successCallback, failureCallback);
        }
        return {
            getLists: _getLists,
            addItem: _addItem
        }
    });
})();