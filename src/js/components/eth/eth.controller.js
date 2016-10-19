(function() {

  'use strict';

  angular
    .module('myApp.components.eth', [])
    .controller('ethController', ethController);

  ethController.$inject = ['apiGetService'];

  function ethController(apiGetService) {
    /*jshint validthis: true */
    this.greeting = 'ethereum controller';

    this.click = function() {
      // console.log('hit ethController');
      let currency = 'eth-usd';
      apiGetService.getExRate(currency).then(res => {
        // this.result = res;
        this.res = res.ticker;
      });

    };
  }

})();
