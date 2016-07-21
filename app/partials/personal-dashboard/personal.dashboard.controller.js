(function () {
    'use strict';

    angular.module('awesomebua').controller('PersonalDashboardController', function ($scope) {
        $scope.title = 'This is title';

        $scope.dropdown = [
            {
                "text": "notification",
                "href": "#anotherAction",
                "active": true
            },
            {
                "text": "notification",
                "href": "#anotherAction",
            },
            {
                "text": "notification",
                "href": "#anotherAction",
            }
        ];
    });

})();