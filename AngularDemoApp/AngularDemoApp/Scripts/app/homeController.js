(function () {
    'use strict';

    var angularDemoApp = angular.module('AngularDemoApp');

    angularDemoApp.controller('homeController', function (apiService) {
        var ctrl = this;

        ctrl.lists = [];

        ctrl.selectedList = undefined;

        ctrl.selectList = function(list) {
            ctrl.selectedList = list;
        }

        ctrl.init = function() {
            apiService.getLists().then(function(lists) { ctrl.lists = lists; });
        }
    });
})();