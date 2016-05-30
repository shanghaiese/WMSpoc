/**
 * Created by caikaijie on 2016/5/24.
 */
/**
 * Created by caikaijie on 2016/5/18.
 */
(function () {
    'use strict';
    angular.module('wcprototype')
        .directive('gridNoBtnTable',gridTableFunc);
    /////////////////////////////////////////////////////////
    function gridTableFunc(){
        return {
            restrict : 'AE',
            replace : true,
            transclude : true,
            templateUrl : 'app/js/directive/gridNoBtnDirective/gridNoBtnDemo.html',
            link : function(scope,element,attr){
                scope.imgShow=true;//全选标志
                scope.singleImgShow=[];//局部选择标志
                scope.count=0;
                scope.imgCount=0;
                scope.optionBlock=false;
                scope.optionBlockClickCount=0;
                scope.allSelectPre=false;//是否全选
                scope.allSelectCount=false;//全选计数
                if(attr.totalhide == 'true'){
                  $('.data-total').css('display','none');
                }
                //列选项监听
                scope.$on('imgHide', function (event,data) {
                        if(scope.imgCount%2==0){
                            $('.table-grid-title>ul>li>i').css('display','none');
                        }else{
                            $('.table-grid-title>ul>li>i').css('display','block');
                        }
                        scope.imgCount++;
                });
                //分组查看监听
                scope.$on('optionHide', function (event,data) {
                    if(scope.optionBlockClickCount%2==0){
                        scope.optionBlock=true;
                    }else{
                        scope.optionBlock=false;
                    }
                    scope.optionBlockClickCount++;
                });
                /**
                 * 全选
                 */
                scope.allSelect=function(){
                  scope.allSelectCount++;
                  if(scope.allSelectCount%2!=0){
                    scope.allSelectPre=true;
                    //if(scope.allSelectPre){
                    for(var i=0;i<$('.table-grid-content').children().length;i++){
                      scope.singleImgShow[i]=false;
                      console.log($('.table-grid-content').children().length);
                    }
                    //}
                  }else{
                    scope.allSelectPre=false;
                    for(var i=0;i<$('.table-grid-content').children().length;i++){
                      scope.singleImgShow[i]=true;
                      console.log($('.table-grid-content').children().length);
                    }
                  }

                  if(scope.imgShow){
                    $('.table-grid-content>ul>li').css('background-color','#e4e4e4');
                    $('#li-img-width>img').attr('src','../app/img/chk-bx_u766_selected.png');
                    $('#li-grid-img-width>img').attr('src','../app/img/chk-bx_u766_selected.png');
                    scope.imgShow=false;
                  }else{
                    $('.table-grid-content>ul>li').css('background-color','#ffffff');
                    $('#li-img-width>img').attr('src','../app/img/u117_mouseOver.png');
                    $('#li-grid-img-width>img').attr('src','../app/img/u117_mouseOver.png');
                    scope.imgShow=true;
                  }


                };
                /**
                 * 多选
                 * @param buff
                 */
                scope.mulSelect=function(buff){
                    if(scope.allSelectPre){//全选已经初始化

                    }else{//没有全选需要初始化
                        if(scope.allSelectCount<1){
                            if(scope.count==0){
                                for(var i=0;i<$('.table-grid-content').children().length;i++){
                                    scope.singleImgShow[i]=true;
                                    console.log($('.table-grid-content').children().length);
                                }
                                scope.count++;
                            }
                        }

                    }
                    if(scope.singleImgShow[buff]){//单选为true
                        $('.table-grid-content')
                            .children()
                            .eq(buff)
                            .find('#li-grid-img-width>img')
                            .attr('src','../app/img/chk-bx_u766_selected.png');
                        $('.table-grid-content')
                            .children()
                            .eq(buff)
                            .children().css('background-color','#e4e4e4');
                        scope.singleImgShow[buff]=false;
                        scope.allSelectPre=true;
                    }else{//单选为false
                        $('.table-grid-content')
                            .children()
                            .eq(buff)
                            .find('#li-grid-img-width>img')
                            .attr('src','../app/img/u117_mouseOver.png');
                        if(buff%2==0){
                            $('.table-grid-content')
                                .children()
                                .eq(buff)
                                .children().css('background-color','#ffffff');
                        }else{
                            $('.table-grid-content')
                                .children()
                                .eq(buff)
                                .children().css('background-color','#F6F6F6');
                        }
                        scope.singleImgShow[buff]=true;
                        scope.allSelectPre=false;
                    }


                }
            },
            controller : function(){
                console.log('ulCount='+$('.table-grid-content').children().length);
            }
        }
    }
})();
