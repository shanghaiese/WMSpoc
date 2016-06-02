/**
 * Created by luyongjie on 2016/5/24.
 */

(function () {
  'use strict';
  angular
    .module('wcprototype')
    .controller('wcprototypeController',wcprototypeController);
  /////////////////////////////////////////////////////////
  function wcprototypeController($scope) {

    /*$scope.Fkey = function(){
     var   wsh   =   new   activexobject("WScript.Shell");
     wsh.sendKeys("{F11}");
     };
     */
    $scope.showLogo = true;
  }
})();
