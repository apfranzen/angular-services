(function() {
  // 'use strict';

  angular
  .module('myApp')
  .service('apiGetService', apiGetService);

  apiGetService.$inject = ['$http'];

  function apiGetService($http) {
    this.getExRate = (currency) => {
      return $http.get(`https://api.cryptonator.com/api/ticker/${currency}`)
      .then(function(response) {
        return (response.data);
      });
    };
  }
}());
