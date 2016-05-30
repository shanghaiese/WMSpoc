(function() {
  'use strict';

  angular
    .module('wcprototype')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
