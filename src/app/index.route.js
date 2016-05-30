(function() {
  'use strict';

  angular
    .module('wcprototype')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      //.state('', {
      //  url: '/',
      //  templateUrl: 'app/main/main.html',
      //  controller: 'MainController',
      //  controllerAs: 'main'
      //})
      .state('orderSummary', {
        url: '/orderSummary',
        templateUrl: 'app/orderSummary/orderSummary.html',
        controller: 'orderSunmmaryCtrl',
        controllerAs: 'main'
      })
      .state('outerOrderFind', {
          url: '/outerOrderFind',
          templateUrl: 'app/outerOrderFind/outerOrderFind.html',
          controller: 'outerOrderFindCtrl'
          //controllerAs: 'main'
        });

    $urlRouterProvider.otherwise('/orderSummary');
  }

})();
