(function () {
    'use strict';

    var angularDemoApp = angular.module('AngularDemoApp');

    angularDemoApp.controller('homeController', function ($http) {
        var ctrl = this;

        ctrl.lists = [];

        ctrl.selectedList = undefined;

        ctrl.selectList = function(list) {
            ctrl.selectedList = list;
        }

        ctrl.init = function() {
            $http({ method: "GET", url: "api/v1/lists" }).then(function(response) { ctrl.lists = response.data; }, function(response) { console.log("something went wrong") });
        }
    });
})();