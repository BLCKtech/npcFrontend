(function () {
  'use strict';

  angular
    .module('angular-docker-boilerplate')
    .controller('CreateNpcCtrl', CreateNpcCtrl);

  CreateNpcCtrl.$inject = ['$scope', 'BlockchainService', 'AuthService'];

  function CreateNpcCtrl($scope, BlockchainService, AuthService) {
    $scope.appName = 'NPC PoC';

    AuthService.getAllUsers()
    .then(function(res) {
      res.data.forEach(function(signee) {
        signee.signee = signee._id
      })
      console.log(res.data)
      $scope.signees = res.data
    })

    $scope.npc = {};
    $scope.errors = {};
    $scope.createNpc = createNpc

    function createNpc(form) {
      if (form.$valid) {
        BlockchainService.createNpc($scope.npc)
        .then(function(response) {
          alert('NPC document created')
          console.log(response)
        })
        .catch(function(err) {
          alert('Something went wrong creating the NPC, please try again')
          console.log(err)
        })
      }
    }
  }
}());

