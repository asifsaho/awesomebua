(function () {
    'use strict';

    var awesomebua = angular.module('awesomebua');

    awesomebua.controller('homeController', function ($scope) {
        $scope.modal = {
            "title": "Title",
            "content": "Hello Modal This is a message!"
        };
    });

})();
