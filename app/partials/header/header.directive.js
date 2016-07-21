/**
 * Created by asifsaho on 5/15/16.
 */

(function(){
    'use strict';

    angular.module('awesomebua').directive('homeHeader', function(){
        return {
            restrict: 'E',
            templateUrl: 'partials/header/home.header.tpl.html'
        }
    });
})();