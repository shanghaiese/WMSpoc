/**
 * Created by caikaijie on 2016/5/26.
 */
/**
 * Created by caikaijie on 2016/5/18.
 */
(function () {
    //'use strict';
    angular.module('wcprototype')
        .directive('topBar',topBarFunc);
    /////////////////////////////////////////////////////////
    function topBarFunc(){
        return {
            restrict : 'AE',
            replace : true,
            transclude : true,
            templateUrl : '/app/js/directive/topBarDirective/topBarDirective.html',
            link : function(scope,element){
               scope.scrollCount=0;
              angular.element(window).mousewheel(function(event) {
                event.wheelDelta=event.wheelDelta ? event.wheelDelta/120 : -( event.detail%3 == 0 ? event.detail : event.detail/3 );
                scope.scrollCount++;
                if( scope.scrollCount>=5){
                  if(event.deltaY<0){
                    element.find(".short-desc-bottom").css('display','block');
                    element.siblings('.row').find('#scroll-hide-event').css('display','none');
                  }else{
                    element.find(".short-desc-bottom").css('display','none');
                    element.siblings('.row').find('#scroll-hide-event').css('display','block');
                  }
                  scope.scrollCount=0;
                }

              });

            },
            controller : function(){

            }
        }
    }
})();
