/**
 * Created by caikaijie on 2016/5/18.
 */
(function () {
    //'use strict';
    angular.module('wcprototype')
        .directive('tabPanel',tabPanelDirectiveFunc);
    /////////////////////////////////////////////////////////
    function tabPanelDirectiveFunc(){
        return {
            restrict : 'AE',
            replace : true,
            transclude : true,
            templateUrl : '/app/js/directive/directive/demo.html',
            link : function(scope,element){
                    element.find('.tabpanel-title').css('height',angular.element(window).height()-50);
                    element.delegate('li','click',function(){
                    if(element.find(this).parent().attr('class') == 'tabpanel-content'){
                        element.find(this)
                            .addClass('demoactive')
                            .siblings()
                            .removeClass('demoactive')
                            .parent()
                            .parent()
                            .siblings('div')
                            .children()
                            .eq(element.find(this).index())
                            .css('display','block')
                            .siblings('div')
                            .css('display','none');
                    }

                });

            },
            controller : function(){

            }
        }
    }
})();
