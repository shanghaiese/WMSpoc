/**
 * Created by caikaijie on 2016/5/24.
 */
/**
 * Created by caikaijie on 2016/5/18.
 */
(function () {
    //'use strict';
    angular.module('wcprototype')
        .directive('formDirective',formDirectiveFunc);
    /////////////////////////////////////////////////////////
    function formDirectiveFunc(){
        return {
            restrict : 'AE',
            replace : true,
            transclude : true,
            templateUrl : '/app/js/directive/formDirective/formDemo.html',
            link : function(scope,element){
              element.find('#datepickerfrom').datepicker();
              element.find('#datepickerto').datepicker();
              element.find('#dropdown-typedef li').css('width',element.find('#dropdown-typedef').width());
              element.find('#dropdown-typedef2 li').css('width',element.find('#dropdown-typedef2').width()+parseInt('25px'));
            },
            controller : function(){

            }
        }
    }
})();
