/**
 * Created by caikaijie on 2016/5/27.
 */
/**
 * Created by caikaijie on 2016/5/18.
 */
(function () {
  'use strict';
  angular.module('wcprototype')
    .directive('switchBtn',switchBtnFunc);
  /////////////////////////////////////////////////////////
  function switchBtnFunc(){
    return {
      restrict : 'AE',
      replace : true,
      transclude : true,
      templateUrl : '/app/js/directive/switchBtn/switchBtn.html',
      link : function(scope,element,attr){
        $('.switchBtn-off').click(function(){
            console.log($(this).parent().parent().attr("class"));
          if($(this).parent().parent().attr("class") == 'columSelect'){
            $('.columSelect').children().children().eq(0).css('display','none');
            $('.columSelect').children().children().eq(1).css('display','block');
            //scope.$broadcast('imgHide','imgHide');
          }else{
            $('.findByGroup').children().children().eq(0).css('display','none');
            $('.findByGroup').children().children().eq(1).css('display','block');
            //scope.$broadcast('optionHide','optionHide');
          }
        });
        $('.switchBtn-on').click(function(){
          if($(this).parent().parent().attr("class") == 'columSelect'){
            $('.switchBtn-off').css('display','block');
            $('.switchBtn-on').css('display','none');
            //scope.$broadcast('imgHide','imgHide');
          }else{
            $('.findByGroup').children().children().eq(0).css('display','block');
            $('.findByGroup').children().children().eq(1).css('display','none');
            //scope.$broadcast('optionHide','optionHide');
          }
        });
      },
      controller : function(){

      }
    }
  }
})();
