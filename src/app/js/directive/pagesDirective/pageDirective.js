/**
 * Created by caikaijie on 2016/5/25.
 */
/**
 * Created by caikaijie on 2016/5/18.
 */
(function () {
    //'use strict';
    angular.module('wcprototype')
        .directive('pages',pagesFunc);
    /////////////////////////////////////////////////////////
    function pagesFunc(){
        return {
            restrict : 'AE',
            //replace : true,
            transclude : true,
            templateUrl : '/app/js/directive/pagesDirective/pageDemo.html'

        }
    }
})();
