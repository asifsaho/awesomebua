/**
 * Created by asifsaho on 5/15/16.
 */

(function(){
    'use strict';

    angular.module('awesomebua').directive('dashHeader', function(){
        return {
            restrict: 'E',
            templateUrl: 'partials/dashboard-header/dashboard.header.tpl.html',
            controller: 'PersonalDashboardController'
        }
    });

    //angular.module('awesomebua').controller('DashboardHeader', function($scope){
    //    $scope.title = 'This is title';
    //})
})();