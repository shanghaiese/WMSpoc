/**
 * Created by caikaijie on 2016/5/18.
 */
(function () {
    'use strict';
    angular.module('wcprototype')
        .directive('tabPanel',tabPanelDirectiveFunc);
    /////////////////////////////////////////////////////////
    function tabPanelDirectiveFunc(){
        return {
            restrict : 'AE',
            replace : true,
            transclude : true,
            templateUrl : '/app/js/directive/directive/demo.html',
            link : function(scope,element,attr){
                $('.tabpanel-title').css('height',$(window).height()-50);
                $(element).delegate('li','click',function(){
                    console.log('$(this).parent='+$(this).parent().attr('class'));
                    if($(this).parent().attr('class') == 'tabpanel-content'){
                        $(this)
                            .addClass('active')
                            .siblings()
                            .removeClass('active')
                            .parent()
                            .parent()
                            .siblings('div')
                            .children()
                            .eq($(this).index())
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
