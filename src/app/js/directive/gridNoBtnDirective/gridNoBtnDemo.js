/**
 * Created by caikaijie on 2016/5/24.
 */
/**
 * Created by caikaijie on 2016/5/18.
 */
(function () {
    //'use strict';
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
                  element.find('.data-total').css('display','none');
                }
                //列选项监听
                scope.$on('imgHide', function () {
                        if(scope.imgCount%2==0){
                          element.find('.table-grid-title>ul>li>i').css('display','none');
                        }else{
                          element.find('.table-grid-title>ul>li>i').css('display','block');
                        }
                        scope.imgCount++;
                });
                //分组查看监听
                scope.$on('optionHide', function () {
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
                    for(var k=0;k<element.find('.table-grid-content').children().length;k++){
                      scope.singleImgShow[k]=false;
                    }
                    //}
                  }else{
                    scope.allSelectPre=false;
                    for(var i=0;i<element.find('.table-grid-content').children().length;i++){
                      scope.singleImgShow[i]=true;
                    }
                  }

                  if(scope.imgShow){
                    element.find('.table-grid-content>ul>li').css('background-color','#e4e4e4');
                    element.find('#li-img-width>img').attr('src','../app/img/chk-bx_u766_selected.png');
                    element.find('#li-grid-img-width>img').attr('src','../app/img/chk-bx_u766_selected.png');
                    scope.imgShow=false;
                  }else{
                    element.find('.table-grid-content>ul>li').css('background-color','#ffffff');
                    element.find('#li-img-width>img').attr('src','../app/img/u117_mouseOver.png');
                    element.find('#li-grid-img-width>img').attr('src','../app/img/u117_mouseOver.png');
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
                                for(var j=0;j<element.find('.table-grid-content').children().length;j++){
                                    scope.singleImgShow[j]=true;
                                }
                                scope.count++;
                            }
                        }

                    }
                    if(scope.singleImgShow[buff]){//单选为true
                      element.find('.table-grid-content')
                            .children()
                            .eq(buff)
                            .find('#li-grid-img-width>img')
                            .attr('src','../app/img/chk-bx_u766_selected.png');
                      element.find('.table-grid-content')
                            .children()
                            .eq(buff)
                            .children().css('background-color','#e4e4e4');
                        scope.singleImgShow[buff]=false;
                        scope.allSelectPre=true;
                    }else{//单选为false
                      element.find('.table-grid-content')
                            .children()
                            .eq(buff)
                            .find('#li-grid-img-width>img')
                            .attr('src','../app/img/u117_mouseOver.png');
                        if(buff%2==0){
                          element.find('.table-grid-content')
                                .children()
                                .eq(buff)
                                .children().css('background-color','#ffffff');
                        }else{
                          element.find('.table-grid-content')
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
            }
        }
    }
})();
