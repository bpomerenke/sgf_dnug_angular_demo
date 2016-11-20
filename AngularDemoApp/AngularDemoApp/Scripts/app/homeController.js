(function () {
    'use strict';

    var angularDemoApp = angular.module('AngularDemoApp');

    angularDemoApp.controller('homeController', function ($scope, apiService) {
        var ctrl = this;

        ctrl.lists = [];

        ctrl.selectedList = undefined;

        ctrl.selectList = function(list) {
            ctrl.selectedList = list;
        }

        ctrl.init = function() {
            apiService.getLists().then(function(lists) { ctrl.lists = lists; });
        }

        ctrl.addItem = function(item) {
            apiService.addItem(ctrl.selectedList.id, item).then(function () {
                ctrl.selectedList.items.push(item);
                $scope.itemText = "";
            });
        }
    });
})();