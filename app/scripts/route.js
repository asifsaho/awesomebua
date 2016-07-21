(function () {
    'use strict';

    angular.module('awesomebua').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/home/home.tpl.html',
                controller: 'homeController'
            })
            .state('global-dashboard', {
                url: '/global-dashboard',
                templateUrl: 'partials/global-dashboard/global-dashboard.tpl.html'
            })
            .state('personal-dashboard', {
                url: '/personal-dashboard',
                templateUrl: 'partials/personal-dashboard/personal-dashboard.tpl.html'
            })
            .state('forgot', {
                url: '/forgot',
                templateUrl: 'partials/forgot-password/forgot-password.tpl.html'
            });
    });
})();