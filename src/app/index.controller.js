/**
 * Created by luyongjie on 2016/5/24.
 */

(function () {
  'use strict';
  angular
    .module('wcprototype')
    .controller('wcprototypeCtrl',wcprototypeCtrl);
  /////////////////////////////////////////////////////////
  function wcprototypeCtrl($scope){

     $scope.Fkey = function(){
       var   wsh   =   new   activexobject("WScript.Shell");
       wsh.sendKeys("{F11}");
     };
  }
})();
