awesomebua.controller('OrderController', function($scope){
    "use strict";

    //var currentDate = new Date(); // current date
    //
    //$scope.currentYear = currentDate.getFullYear(); // current year
    //$scope.currentMonth = monthNames[currentDate.getMonth()]; // current month name
    //
    //$scope.months = months($scope.currentYear);
    //

    $scope.orderCalendar = [
        {
            name: 'January',
            daysCount: 30,
            thumb: 'images/cover.jpg',
            days: [ // date willl be array index no + 1 as its started from 0
                { name : 'Saturday',    model : 'order20163101' },
                { name : 'Sunday',      model : 'order20163102' },
                { name : 'Monday',      model : 'order20163103' },
                { name : 'Tuesday',     model : 'order20163104' },
                { name : 'Wednesday',   model : 'order20163105' },
                { name : 'Thursday',    model : 'order20163106' },
                { name : 'Friday',      model : 'order20163107' },
                { name : 'Saturday',    model : 'order20163108' },
                { name : 'Sunday',      model : 'order20163109' },
                { name : 'Monday',      model : 'order20163110' },
                { name : 'Tuesday',     model : 'order20163111' },
                { name : 'Wednesday',   model : 'order20163112' },
                { name : 'Thursday',    model : 'order20163113' },
                { name : 'Friday',      model : 'order20163114' },
                { name : 'Saturday',    model : 'order20163115' },
                { name : 'Sunday',      model : 'order20163116' },
                { name : 'Monday',      model : 'order20163117' },
                { name : 'Tuesday',     model : 'order20163118' },
                { name : 'Wednesday',   model : 'order20163119' },
                { name : 'Thursday',    model : 'order20163120' },
                { name : 'Friday',      model : 'order20163121' },
                { name : 'Saturday',    model : 'order20163122' },
                { name : 'Sunday',      model : 'order20163123' },
                { name : 'Monday',      model : 'order20163124' },
                { name : 'Tuesday',     model : 'order20163125' },
                { name : 'Wednesday',   model : 'order20163126' },
                { name : 'Thursday',    model : 'order20163127' },
                { name : 'Friday',      model : 'order20163128' },
                { name : 'Friday',      model : 'order20163129' },
                { name : 'Saturday',    model : 'order20163130' },
                { name : 'Sunday',      model : 'order20163140' }
            ]
        },
        //{
        //    name: 'January',
        //    daysCount: 30,
        //    thumb: 'images/cover.jpg',
        //    days: [ // date willl be array index no + 1 as its started from 0
        //        { name : 'Saturday',    model : 'order20163101' },
        //        { name : 'Sunday',      model : 'order20163102' },
        //        { name : 'Monday',      model : 'order20163103' },
        //        { name : 'Tuesday',     model : 'order20163104' },
        //        { name : 'Wednesday',   model : 'order20163105' },
        //        { name : 'Thursday',    model : 'order20163106' },
        //        { name : 'Friday',      model : 'order20163107' },
        //        { name : 'Saturday',    model : 'order20163108' },
        //        { name : 'Sunday',      model : 'order20163109' },
        //        { name : 'Monday',      model : 'order20163110' },
        //        { name : 'Tuesday',     model : 'order20163111' },
        //        { name : 'Wednesday',   model : 'order20163112' },
        //        { name : 'Thursday',    model : 'order20163113' },
        //        { name : 'Friday',      model : 'order20163114' },
        //        { name : 'Saturday',    model : 'order20163115' },
        //        { name : 'Sunday',      model : 'order20163116' },
        //        { name : 'Monday',      model : 'order20163117' },
        //        { name : 'Tuesday',     model : 'order20163118' },
        //        { name : 'Wednesday',   model : 'order20163119' },
        //        { name : 'Thursday',    model : 'order20163120' },
        //        { name : 'Friday',      model : 'order20163121' },
        //        { name : 'Saturday',    model : 'order20163122' },
        //        { name : 'Sunday',      model : 'order20163123' },
        //        { name : 'Monday',      model : 'order20163124' },
        //        { name : 'Tuesday',     model : 'order20163125' },
        //        { name : 'Wednesday',   model : 'order20163126' },
        //        { name : 'Thursday',    model : 'order20163127' },
        //        { name : 'Friday',      model : 'order20163128' },
        //        { name : 'Friday',      model : 'order20163129' },
        //        { name : 'Saturday',    model : 'order20163130' },
        //        { name : 'Sunday',      model : 'order20163140' }
        //    ]
        //},
        //{
        //    name: 'January',
        //    daysCount: 30,
        //    thumb: 'images/cover.jpg',
        //    days: [ // date willl be array index no + 1 as its started from 0
        //        { name : 'Saturday',    model : 'order20163101' },
        //        { name : 'Sunday',      model : 'order20163102' },
        //        { name : 'Monday',      model : 'order20163103' },
        //        { name : 'Tuesday',     model : 'order20163104' },
        //        { name : 'Wednesday',   model : 'order20163105' },
        //        { name : 'Thursday',    model : 'order20163106' },
        //        { name : 'Friday',      model : 'order20163107' },
        //        { name : 'Saturday',    model : 'order20163108' },
        //        { name : 'Sunday',      model : 'order20163109' },
        //        { name : 'Monday',      model : 'order20163110' },
        //        { name : 'Tuesday',     model : 'order20163111' },
        //        { name : 'Wednesday',   model : 'order20163112' },
        //        { name : 'Thursday',    model : 'order20163113' },
        //        { name : 'Friday',      model : 'order20163114' },
        //        { name : 'Saturday',    model : 'order20163115' },
        //        { name : 'Sunday',      model : 'order20163116' },
        //        { name : 'Monday',      model : 'order20163117' },
        //        { name : 'Tuesday',     model : 'order20163118' },
        //        { name : 'Wednesday',   model : 'order20163119' },
        //        { name : 'Thursday',    model : 'order20163120' },
        //        { name : 'Friday',      model : 'order20163121' },
        //        { name : 'Saturday',    model : 'order20163122' },
        //        { name : 'Sunday',      model : 'order20163123' },
        //        { name : 'Monday',      model : 'order20163124' },
        //        { name : 'Tuesday',     model : 'order20163125' },
        //        { name : 'Wednesday',   model : 'order20163126' },
        //        { name : 'Thursday',    model : 'order20163127' },
        //        { name : 'Friday',      model : 'order20163128' },
        //        { name : 'Friday',      model : 'order20163129' },
        //        { name : 'Saturday',    model : 'order20163130' },
        //        { name : 'Sunday',      model : 'order20163140' }
        //    ]
        //}
    ];
});


