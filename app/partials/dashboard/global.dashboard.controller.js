(function () {
    'use strict';

    awesomebua.controller('GlobalDashboardController', function ($scope) {

        $scope.notificationAmount = 12; // static notification amount for future development

        $scope.statuses = [ // static status msg for future development
            { date: '10.05.16', user: 'asifsaho', msg : 'I will be late today, please keep the door open'},
            { date: '10.05.16', user: 'asifsaho', msg : 'I won\'t come to home tonight'},
            { date: '10.05.16', user: 'asifsaho', msg : 'Lorem Ipsum Dolor Sit amet'}
        ];

        var currentDate = new Date(); // current date

        $scope.currentYear = currentDate.getFullYear(); // current year
        $scope.currentMonth = monthNames[currentDate.getMonth()]; // current month name

        $scope.months = months($scope.currentYear);

        var currentMonthDays = function (monthName){
            var dayNum = 30;
            $scope.months.forEach(function(month){
                if(month.name == monthName) {
                    dayNum = month.days;
                }
            });
            return dayNum;
        };

        $scope.range = function(n) {
            return new Array(n);
        };
    });

})();