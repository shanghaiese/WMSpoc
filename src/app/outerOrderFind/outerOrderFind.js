/**
 * Created by caikaijie on 2016/5/26.
 */
(function(){
  'use strict';
  angular.module('wcprototype')
    .controller('outerOrderFindController',outerOrderFindController);
  //////////////////////////////////////////////////////////
  function outerOrderFindController(){
    var vm = this;
    var outerOrderFindVm = vm;
    outerOrderFindVm.testDataDrder=[
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
    outerOrderFindVm.goodsInfostyle = {
      "background-color" : "white",
      "font-size" : '15px'
    };
    outerOrderFindVm.storeInfostyle = {
      "background-color" : "#e4e4e4"
    };
    outerOrderFindVm.otherInfostyle = {
      "background-color" : "#e4e4e4"
    };
    outerOrderFindVm.close = function(){
      outerOrderFindVm.showText = false;
    };

    /////////////////////////
    outerOrderFindVm.goodsInfo = function () {

      outerOrderFindVm.goodsInfostyle = {
        "background-color" : "white",
        "font-size" : '15px'
      };
      outerOrderFindVm.storeInfostyle = {
        "background-color" : "#e4e4e4"
      };
      outerOrderFindVm.otherInfostyle = {
        "background-color" : "#e4e4e4"
      };
    };
    //////////////////////////////
    outerOrderFindVm.storeInfo = function () {

      outerOrderFindVm.goodsInfostyle = {
        "background-color" : "#e4e4e4",
        "font-size" : '15px'
      };
      outerOrderFindVm.storeInfostyle = {
        "background-color" : "white"
      };
      outerOrderFindVm.otherInfostyle = {
        "background-color" : "#e4e4e4"
      };
    };
    ////////////////////////////
    outerOrderFindVm.otherInfo = function () {

      outerOrderFindVm.goodsInfostyle = {
        "background-color" : "#e4e4e4",
        "font-size" : '15px'
      };
      outerOrderFindVm.storeInfostyle = {
        "background-color" : "#e4e4e4"
      };
      outerOrderFindVm.otherInfostyle = {
        "background-color" : "white"
      };
    }
  }
})();
