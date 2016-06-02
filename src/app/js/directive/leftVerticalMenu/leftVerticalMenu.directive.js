/**
 * Created by caikaijie on 2016/5/18.
 */
(function () {
  angular.module('wcprototype')
    .directive('verticalMenu',verticalMenuFunc);
  /////////////////////////////////////////////////
  function verticalMenuFunc(){
    return {
      restrict : 'AE',
      replace : true,
      transclude : true,
      templateUrl : '/app/js/directive/leftVerticalMenu/leftVerticalMenu.tpl.html',
      link : function(scope,element){

        scope.showRight = function(){
          element.find('.list-header-left').css('display','none').css('z-index','-20');
          element.find('.list-header-right').css('display','block').css('z-index','20');
          element.find('.leftPart').css('display','none');
          element.find('.rightPart').css('display','block').css('position','relative').css('z-index','200000 !important');
          scope.showLogo = false;
        };

        scope.hideRight = function () {
          element.find('.list-header-left').css('display', 'block').css('z-index','20');
          element.find('.list-header-right').css('display', 'none').css('z-index','-20');
          element.find('.leftPart').css('display', 'block').css('z-index','0');
          element.find('.rightPart').css('display', 'none');
          scope.showLogo = true;
        }
      },
      controller : function(){

      }
    }
  }
})();
