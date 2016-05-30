/**
 * Created by caikaijie on 2016/5/24.
 */
/**
 * Created by caikaijie on 2016/5/18.
 */
(function () {
    'use strict';
    angular.module('wcprototype')
        .directive('formDirective',formDirectiveFunc);
    /////////////////////////////////////////////////////////
    function formDirectiveFunc(){
        return {
            restrict : 'AE',
            replace : true,
            transclude : true,
            templateUrl : '/app/js/directive/formDirective/formDemo.html',
            link : function(scope,element,attr){
                $('#datepickerfrom').datepicker();
                $('#datepickerto').datepicker();
                $('#dropdown-typedef li').css('width',$('#dropdown-typedef').width());
                $('#dropdown-typedef2 li').css('width',$('#dropdown-typedef2').width());

            },
            controller : function(){

            }
        }
    }
})();
