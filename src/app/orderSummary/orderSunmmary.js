/**
 * Created by caikaijie on 2016/5/23.
 */
(function () {
    'use strict';
    angular.module('wcprototype')
        .controller('orderSunmmaryController',orderSunmmaryController);
    /**
     *
     */
    function orderSunmmaryController(){
      var vm = this;
      var orderSunmmaryVm = vm;
      orderSunmmaryVm.isShow=true;
      orderSunmmaryVm.testDataDrder=[
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
      orderSunmmaryVm.hideSerch= function () {
            if(orderSunmmaryVm.isShow){
              orderSunmmaryVm.isShow=false;
            }else{
              orderSunmmaryVm.isShow=true;
            }

        };

    }
})();
