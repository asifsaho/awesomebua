(function () {
    'use strict';

    angular.module('awesomebua').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/home/home.html',
                controller: 'homeController'
            })
            .state('global-dashboard', {
                url: "/global-dashboard",
                templateUrl: "partials/global-dashboard/global-dashboard.html"
            })
            .state('personal-dashboard', {
                url: "/personal-dashboard",
                templateUrl: "partials/personal-dashboard/personal-dashboard.html"
            });
    });
})();