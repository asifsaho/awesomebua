(function () {
    'use strict';

    angular.module('awesomebua').controller('homeController', function ($scope, $sce) {

        $scope.tabs = [
            {
                "title": "Login",
                "content": "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."
            },
            {
                "title": "Register",
                "content": "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."
            }
        ];

        $scope.tabs.activeTab = "Login";

        $scope.changeAction = function(){
            console.log('wefwef');
        };

        //$scope.modal = {
        //    "title": "Titlemama",
        //    "content": "Hello Modal This is a message! with Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, doloremque excepturi harum, impedit ipsam iste natus nisi optio sapiente sed sit, sunt suscipit ullam. Ad at culpa fuga quae soluta?"
        //};
    });

})();