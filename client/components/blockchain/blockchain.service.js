(function () {
  'use strict';

  angular
    .module('angular-docker-boilerplate')
    .factory('BlockchainService', BlockchainService);

  BlockchainService.$inject = ['$http', '$cookies', '$q', 'User'];

  function BlockchainService($http, $cookies, $q, User) {
    var service = {
      getNpcDocsForUser: getNpcDocsForUser,
      createNpc: createNpc,
      signDocument: signDocument,
      blockchainTest: blockchainTest
    };

    return service;

    function getNpcDocsForUser() {
      return $q(function(resolve, reject) {
        User.get().$promise.then(function(currentUser) {
          console.log(currentUser._id)
          return $http.get('/api/blockchain/npcdoc/' + currentUser._id)
        })
        .then(function(res) {
          console.log(res)
          resolve(res.data)
        }, function(err) {
          console.log(err)
        }.bind(this))
      })
    }

    function createNpc(npc) {
      return $q(function(resolve, reject) {
        $http.post('/api/blockchain/npcdoc', npc)
        .then(function(res) {
          resolve(res.data)
        }, function(err) {
          console.log(err)
        }.bind(this))
      })
    }

    function signDocument(npcDocId) {
      return $q(function(resolve, reject) {
        User.get().$promise.then(function(currentUser) {
          return $http.get('/api/blockchain/npcdoc/sign/' + npcDocId + '/' + currentUser._id)
        })
        .then(function(res) {
          resolve(res.data)
        }, function(err) {
          console.log(err)
        }.bind(this))
      })
    }

    function blockchainTest() {
      return $q(function(resolve, reject) {
        $http.get('/api/blockchain/test')
        .then(function(res) {
          resolve(res.data)
        }, function(err) {
          console.log(err)
        }.bind(this))
      })
    }

  }
}());
