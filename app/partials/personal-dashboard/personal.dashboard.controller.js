(function () {
    'use strict';

    angular.module('awesomebua').controller('PersonalDashboardController', function ($scope) {

        $scope.notificationAmount = 12;

        $scope.status = 'I will be late today, please keep the door open';

        $scope.months = [
            { name : 'January',     days : 31 },
            { name : 'February',    days : 28 },
            { name : 'March',       days : 31 },
            { name : 'April',       days : 30 },
            { name : 'May',         days : 31 },
            { name : 'June',        days : 30 },
            { name : 'July',        days : 31 },
            { name : 'August',      days : 31 },
            { name : 'September',   days : 31 },
            { name : 'October',     days : 31 },
            { name : 'November',    days : 30 },
            { name : 'December',    days : 31 }

        ];

        $scope.dropdown = [
            {
                "text": "This is a long example notification",
                "href": "javascript:;"
            },
            {
                "text": "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                "href": "javascript:;"
            },
            {
                "text": "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                "href": "javascript:;"
            }
        ];
    });

})();