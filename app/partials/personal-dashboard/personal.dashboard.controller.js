(function () {
    'use strict';

    angular.module('awesomebua').controller('PersonalDashboardController', function ($scope) {

        $scope.notificationAmount = 12; // static notification amount for future development

        $scope.status = 'I will be late today, please keep the door open'; // static status msg for future development

        var isLeapYear = function( year ){ //leap year testing function
            if (year % 4) {
                if(year % 100 ){
                    return (year % 400) ? false : true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        };

        var currentDate = new Date(); // current date
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // all months

        $scope.currentYear = currentDate.getFullYear(); // current year
        $scope.currentMonth = monthNames[currentDate.getMonth()]; // current month name

        $scope.months = [
            { name : 'January',     days : 31 },
            { name : 'February',    days : isLeapYear($scope.currentYear) ? 29 : 28 },
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

        console.log(typeof $scope.currentMonthDays);

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