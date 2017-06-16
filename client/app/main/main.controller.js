(function () {
  'use strict';

  angular
    .module('angular-docker-boilerplate')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', 'BlockchainService'];

  function MainCtrl($scope, BlockchainService) {
    $scope.appName = 'NPC PoC';
    $scope.blockchaintest = function() {
      BlockchainService
      .blockchainTest()
      .then(function(resp) {
        console.log(resp)
        console.log('hej också')
      })
      .catch(function(err) {
        console.log(err)
      })
    }
  }
}());
