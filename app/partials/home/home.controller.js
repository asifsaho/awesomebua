(function () {
    'use strict';


    angular.module('awesomebua').controller('HomeController', function ($scope) {

        $scope.tab = 1;

        $scope.setTab = function(newTab){
          $scope.tab = newTab;
        };

        $scope.isSet = function(tabNum){
          return $scope.tab === tabNum;
        };

        //$scope.modal = {
        //    "title": "Titlemama",
        //    "content": "Hello Modal This is a message! with Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, doloremque excepturi harum, impedit ipsam iste natus nisi optio sapiente sed sit, sunt suscipit ullam. Ad at culpa fuga quae soluta?"
        //};
    });

})();