(function () {
    'use strict';

    var awesomebua = angular.module('awesomebua', ['ui.router', 'mgcrea.ngStrap']);

    awesomebua.config(function ($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/home/home.html'
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