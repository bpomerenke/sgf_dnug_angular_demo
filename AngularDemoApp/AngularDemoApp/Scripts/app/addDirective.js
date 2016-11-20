(function () {
    'use strict';
    var angularDemoApp = angular.module('AngularDemoApp');

    angularDemoApp.directive('addDirective', function () {
        return {
            restrict: 'E',
            scope: {
                addAction: '='
            },
            controller: 'addDirectiveController',
            controllerAs: 'ctrl',
            templateUrl: "addDirective-template.html"
        };
    });

})();