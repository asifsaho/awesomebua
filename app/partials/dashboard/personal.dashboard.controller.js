(function () {
    'use strict';

    awesomebua.controller('PersonalDashboardController', function ($scope) {

        $scope.notificationAmount = 12; // static notification amount for future development

        $scope.status = 'I will be late today, please keep the door open'; // static status msg for future development

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

        $scope.currentMonthDays = currentMonthDays($scope.currentMonth);
    });

})();