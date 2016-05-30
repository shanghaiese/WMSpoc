/**
 * Created by luyongjie on 2016/5/30.
 */
/**
 * Created by luyongjie on 2016/5/24.
 */
/**
 * Created by Administrator on 2016/5/18.
 */
(function () {
  'use strict';
  angular.module('wcprototype')
    .directive('panelInfo',panelInfoFunc);
  /////////////////////////////////////////////////
  function panelInfoFunc(){
    return {
      restrict : 'AE',
      replace : true,
      transclude : true,
      templateUrl : '/app/js/directive/ticketInfo/ticketInfo.tpl.html',
      link : function(scope,element,attr){
        scope.showText = false;

        scope.close = function(){
          scope.showText = false;
        }
      },
      controller : function(){

      }
    }
  }
})();
