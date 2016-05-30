/**
 * Created by caikaijie on 2016/5/26.
 */
/**
 * Created by caikaijie on 2016/5/18.
 */
(function () {
    'use strict';
    angular.module('wcprototype')
        .directive('topBar',topBarFunc);
    /////////////////////////////////////////////////////////
    function topBarFunc(){
        return {
            restrict : 'AE',
            replace : true,
            transclude : true,
            templateUrl : '/app/js/directive/topBarDirective/topBarDirective.html',
            link : function(scope,element,attr){

            },
            controller : function(){

            }
        }
    }
})();
