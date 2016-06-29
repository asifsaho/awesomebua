(function() {
    'use strict';

    angular.module('appControllers')
    .controller('DashboardController', ['$scope', '$routeParams',
	function ($scope, $routeParams) {
		$scope.title = 'Dashboard controller';
	}
	]);
})();