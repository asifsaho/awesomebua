'use strict';
(function () {
    'use strict';

    awesomebua.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'partials/home/home.tpl.html',
            controller: 'HomeController'
        })
            .state('global-dashboard', {
                url: '/global-dashboard',
                templateUrl: 'partials/dashboard/global.dashboard.tpl.html',
                controller: 'GlobalDashboardController'
            })
            .state('personal-dashboard', {
                url: '/dashboard',
                templateUrl: 'partials/dashboard/personal.dashboard.tpl.html',
                controller: 'PersonalDashboardController'
            })
            .state('forgot', {
                url: '/forgot',
                templateUrl: 'partials/forgot-password/forgot.password.tpl.html'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'partials/profile/profile.tpl.html',
                controller: 'ProfileController'
            })
    });
})();
//# sourceMappingURL=route.js.map
