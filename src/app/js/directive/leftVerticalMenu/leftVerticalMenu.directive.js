/**
 * Created by luyongjie on 2016/5/24.
 */
/**
 * Created by Administrator on 2016/5/18.
 */
(function () {
  'use strict';
  angular.module('wcprototype')
    .directive('verticalMenu',verticalMenuFunc);
  /////////////////////////////////////////////////
  function verticalMenuFunc(){
    return {
      restrict : 'AE',
      replace : true,
      transclude : true,
      templateUrl : '/app/js/directive/leftVerticalMenu/leftVerticalMenu.tpl.html',
      link : function(scope,element,attr){

        scope.showRight = function(){
          $('.list-header-left').css('display','none').css('z-index','-20');
          $('.list-header-right').css('display','block').css('z-index','20');
          $('.leftPart').css('display','none');
          $('.rightPart').css('display','block').css('position','relative').css('z-index','200000 !important');

        }

        scope.hideRight = function () {
          $('.list-header-left').css('display', 'block').css('z-index','20');
          $('.list-header-right').css('display', 'none').css('z-index','-20');
          $('.leftPart').css('display', 'block').css('z-index','0');
          $('.rightPart').css('display', 'none');
        }
      },
      controller : function(){

      }
    }
  }
})();
