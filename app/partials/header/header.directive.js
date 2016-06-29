/**
 * Created by asifsaho on 5/15/16.
 */

(function(){
    'use strict';
    var app = angular.module('awesomebua');

    app.directive('mainHeader', function(){
        return {
            restrict: 'E',
            templateUrl: 'app/module/header/header.tpl.html'
        }
    });
})();