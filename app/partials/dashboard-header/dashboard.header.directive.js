/**
 * Created by asifsaho on 5/15/16.
 */

(function(){
    'use strict';

    awesomebua.directive('dashHeader', function(){
        return {
            restrict: 'E',
            templateUrl: 'partials/dashboard-header/dashboard.header.tpl.html',
            controller: 'PersonalDashboardController'
        }
    });

    awesomebua.controller('DashboardHeaderController', function($scope){
        $scope.notificationDropdown = [
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

        $scope.menuDropdown = [
            {
                "text": "Back",
                "href": "javascript:;"
            },
            {
                "text": "Profile",
                "href": "javascript:;"
            }
        ];

        $scope.slideMenuItems = [
            { menuTitle: 'Home', menuLink : 'home' },
            { menuTitle: 'Dashboard', menuLink : 'personal-dashboard' },
            { menuTitle: 'Global', menuLink : 'global-dashboard' },
            { menuTitle: 'Profile', menuLink : 'profile' }
        ];
    })
})();