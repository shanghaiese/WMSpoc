/**
 * Created by caikaijie on 2016/5/27.
 */
/**
 * Created by caikaijie on 2016/5/18.
 */
(function () {
  //'use strict';
  angular.module('wcprototype')
    .directive('switchBtn',switchBtnFunc);
  /////////////////////////////////////////////////////////
  function switchBtnFunc(){
    return {
      restrict : 'AE',
      replace : true,
      transclude : true,
      templateUrl : '/app/js/directive/switchBtn/switchBtn.html',
      link : function(scope,element){
        element.find('.switchBtn-off').click(function(){
          if(element.find(this).parent().parent().attr("class") == 'columSelect'){
            element.parents().children().children().eq(0).css('display','none').siblings().css('display','block');
            scope.$broadcast('imgHide','imgHide');
          }else{
            element.parents().children().children().eq(0).css('display','none').siblings().css('display','block');
            scope.$broadcast('optionHide','optionHide');
          }
        });
        element.find('.switchBtn-on').click(function(){
          if(element.find(this).parent().parent().attr("class") == 'columSelect'){
            element.find('.switchBtn-off').css('display','block');
            element.find('.switchBtn-on').css('display','none');
            scope.$broadcast('imgHide','imgHide');
          }else{
            element.parents().children().children().eq(0).css('display','block').siblings().css('display','none');
            scope.$broadcast('optionHide','optionHide');
          }
        });
      },
      controller : function(){

      }
    }
  }
})();
