(function () {
    'use strict';

    var angularDemoApp = angular.module('AngularDemoApp');

    angularDemoApp.controller('homeController', function () {
        var ctrl = this;

        ctrl.lists = [
            { id: 1, name: 'something', items: ['item 1', 'item 2'] },
            { id: 2, name: 'something else', items: ['item 3', 'item 4'] }
        ];
    });
})();