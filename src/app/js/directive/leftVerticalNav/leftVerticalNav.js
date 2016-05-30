/**
 * Created by caikaijie on 2016/5/30.
 */
/**
 * Created by Administrator on 2016/5/18.
 */
(function () {
  'use strict';
  angular.module('wcprototype')
    .directive('verticalNav',verticalNavFunc);
  /////////////////////////////////////////////////
  function verticalNavFunc(){
    return {
      restrict : 'AE',
      replace : true,
      transclude : true,
      templateUrl : '/app/js/directive/leftVerticalNav/leftVerticalNav.html',
      link : function(scope,element,attr){
        var showOrHideType=['.li-fir-left','.li-fir-right','div.li-sec-r'];
        var mouseoverType=['li','#li-id'];
        $('.default_div_style').css('display','none');
        angular.forEach(mouseoverType,function(data){
          $(element).delegate(data,'mouseover',function(){
            console.log("$(this).index()="+$(this).index());
            if(data == 'li'){
              if($(this).index()>0){
                $('.default_div_style').css('display','block');
                $('.default_div_style_bottom').css('display','block');
                $(this).addClass('active').siblings().removeClass('active').parent().siblings('div').children(":eq(1)").children().eq($(this).index()-1).css('display','block').siblings('div').css('display','none');
              }
            }else{
              $('.default_div_style').css('display','none');
              $('.default_div_style_bottom').css('display','none');
            }
          });
        });
        $(element).delegate('.default_div_style_bottom div','mouseleave',function(){
          $('.default_div_style').css('display','none');
          $('.default_div_style_bottom').css('display','none');
          console.log("$(this).index()="+$(this).index());
        });
        scope.hidePercent70 = function (){
          angular.forEach(showOrHideType,function(data){
            $(data).css('display','none');
            $('.default_div_style').css('left','60px').css('top','0');
            $('.right-content').css('left','60px');
          });
          $('.short60 img').css('display','block');
        };
        scope.showPercent70 = function(){
          angular.forEach(showOrHideType,function(data){
            $(data).css('display','block');
            $('.default_div_style').css('left','260px').css('top','0');
            $('.right-content').css('left','60px');
          });
          $('.short60 img').css('display','none');
        }
      },
      controller : function(){

      }
    }
  }
})();
