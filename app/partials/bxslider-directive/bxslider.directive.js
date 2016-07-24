/**
 * Created by asifsaho on 7/24/16.
 */

(function(){
    'use strict';

    awesomebua.directive('bxSlider', function(){
        return {
            restrict: 'A',
            link : function(scope, elem, attrs){
                $(elem).ready(function(){
                    window.setTimeout(function(){
                        $(elem).bxSlider({
                            infiniteLoop: false,
                            pager: false,
                            speed: 100
                        });
                    }, 50)
                })
            }
        }
    });
})();