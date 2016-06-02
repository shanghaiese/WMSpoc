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
        controller: 'orderSunmmaryController',
        controllerAs: 'orderSunmmaryVm'
      })
      .state('outerOrderFind', {
          url: '/outerOrderFind',
          templateUrl: 'app/outerOrderFind/outerOrderFind.html',
          controller: 'outerOrderFindController',
          controllerAs: 'outerOrderFindVm'
        });

    $urlRouterProvider.otherwise('/orderSummary');
  }

})();
