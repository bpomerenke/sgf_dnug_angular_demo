(function () {
    'use strict';

    var angularDemoApp = angular.module('AngularDemoApp');

    angularDemoApp.controller('addDirectiveController', function ($scope) {
        var ctrl = this;

        ctrl.add = function(text) {
            $scope.addAction(text);
            $scope.text = "";
        }
    });
})();