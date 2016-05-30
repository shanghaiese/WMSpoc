/**
 * Created by caikaijie on 2016/5/23.
 */
(function () {
    'use strict';
    angular.module('wcprototype')
        .controller('orderSunmmaryCtrl',orderSunmmaryCtrl);
    /**
     *
     */
    function orderSunmmaryCtrl($scope){
        $scope.isShow=true;
        $scope.testDataDrder=[
            {
                orderNum:'00011604190003',
                getGoodsStore : '008武胜路店',
                getGoodsDate : '2016-4-20',
                orderFrom : 'JH001604190013',
                boxNum : '5',
                mustPay : '225.60',
                busLine : '12-默认线路',
                notes : 'ffffff'
            },
            {
                orderNum:'00011604190003',
                getGoodsStore : '008武胜路店',
                getGoodsDate : '2016-4-20',
                orderFrom : 'JH001604190013',
                boxNum : '5',
                mustPay : '225.60',
                busLine : '12-默认线路',
                notes : 'ffffff'
            },
            {
                orderNum:'00011604190003',
                getGoodsStore : '008武胜路店',
                getGoodsDate : '2016-4-20',
                orderFrom : 'JH001604190013',
                boxNum : '5',
                mustPay : '225.60',
                busLine : '12-默认线路',
                notes : 'ffffff'
            },
            {
                orderNum:'00011604190003',
                getGoodsStore : '008武胜路店',
                getGoodsDate : '2016-4-20',
                orderFrom : 'JH001604190013',
                boxNum : '5',
                mustPay : '225.60',
                busLine : '12-默认线路',
                notes : 'ffffff'
            },
            {
                orderNum:'00011604190003',
                getGoodsStore : '008武胜路店',
                getGoodsDate : '2016-4-20',
                orderFrom : 'JH001604190013',
                boxNum : '5',
                mustPay : '225.60',
                busLine : '12-默认线路',
                notes : 'ffffff'
            },
            {
                orderNum:'00011604190003',
                getGoodsStore : '008武胜路店',
                getGoodsDate : '2016-4-20',
                orderFrom : 'JH001604190013',
                boxNum : '5',
                mustPay : '225.60',
                busLine : '12-默认线路',
                notes : 'ffffff'
            },
            {
                orderNum:'00011604190003',
                getGoodsStore : '008武胜路店',
                getGoodsDate : '2016-4-20',
                orderFrom : 'JH001604190013',
                boxNum : '5',
                mustPay : '225.60',
                busLine : '12-默认线路',
                notes : 'ffffff'
            },
            {
                orderNum:'00011604190003',
                getGoodsStore : '008武胜路店',
                getGoodsDate : '2016-4-20',
                orderFrom : 'JH001604190013',
                boxNum : '5',
                mustPay : '225.60',
                busLine : '12-默认线路',
                notes : 'ffffff'
            },
            {
                orderNum:'00011604190003',
                getGoodsStore : '008武胜路店',
                getGoodsDate : '2016-4-20',
                orderFrom : 'JH001604190013',
                boxNum : '5',
                mustPay : '225.60',
                busLine : '12-默认线路',
                notes : 'ffffff'
            },
            {
                orderNum:'00011604190003',
                getGoodsStore : '008武胜路店',
                getGoodsDate : '2016-4-20',
                orderFrom : 'JH001604190013',
                boxNum : '5',
                mustPay : '225.60',
                busLine : '12-默认线路',
                notes : 'ffffff'
            }
        ];
      console.log(JSON.stringify($scope.testDataDrder[0].orderNum));
        $scope.hideSerch= function () {
            console.log('hide');
            if($scope.isShow){
                $scope.isShow=false;
            }else{
                $scope.isShow=true;
            }

        };
        $scope.imgHide= function () {
            console.log('imgHide');
            $scope.$broadcast('imgHide','imgHide');
        };
        $scope.optionShow= function () {
            $scope.$broadcast('optionHide','optionHide');
            $scope.$broadcast('switchturn','switchturn');

        }
    }
})();
