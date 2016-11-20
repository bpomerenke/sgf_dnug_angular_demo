(function () {
    'use strict';

    var angularDemoApp = angular.module('AngularDemoApp', ['ngRoute']);

    angularDemoApp.config(function ($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl: 'home.html',
                controller: 'homeController',
                controllerAs: 'ctrl'
            });
    });
})();