(function () {
    'use strict';

    angular.module('awesomebua').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/home/home.tpl.html',
                controller: 'HomeController'
            })
            .state('global-dashboard', {
                url: '/global-dashboard',
                templateUrl: 'partials/dashboard/global.dashboard.tpl.html'
            })
            .state('personal-dashboard', {
                url: '/dashboard',
                templateUrl: 'partials/dashboard/personal.dashboard.tpl.html',
                controller: 'PersonalDashboardController'
            })
            .state('forgot', {
                url: '/forgot',
                templateUrl: 'partials/forgot-password/forgot.password.tpl.html'
            });
    });
})();