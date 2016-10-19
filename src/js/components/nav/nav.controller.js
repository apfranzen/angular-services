(function() {

  'use strict';

  angular
    .module('myApp.components.nav', [])
    .controller('navController', navController);

  navController.$inject = ['apiGetService'];

  function navController(apiGetService) {
    /*jshint validthis: true */
    this.greeting = 'nav controller';

    this.click = function() {
      // console.log('hit navController');
      let currency = 'nav-usd';
      apiGetService.getExRate(currency).then(res => {
        // this.result = res;
        this.res = res.ticker;
      });
    };
  }

})();
