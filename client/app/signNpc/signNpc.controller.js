(function () {
  'use strict';

  angular
    .module('angular-docker-boilerplate')
    .controller('SignNpcCtrl', SignNpcCtrl);

  SignNpcCtrl.$inject = ['$scope', 'BlockchainService', '$window'];

  function SignNpcCtrl($scope, BlockchainService, $window) {
    $scope.appName = 'NPC PoC';
    $scope.npcdocElem = $window.document.getElementById('npcdocText')
    
    function getDocs(chosenNpcIndex) {  
      BlockchainService
      .getNpcDocsForUser()
      .then(function(npcDocsToBeSignedByUser) {
        var npcDocsById = {}
        npcDocsToBeSignedByUser.forEach(function(npcDoc) {
          npcDocsById[npcDoc._id] = npcDoc
        })
        $scope.npcDocsToBeSignedByUser = npcDocsById
        if (chosenNpcIndex) {
          $scope.chosenNpcIndex = chosenNpcIndex
        } else {
          $scope.chosenNpcIndex = npcDocsToBeSignedByUser[0]._id
        }
        $scope.npcdocElem.innerHTML = $scope.npcDocsToBeSignedByUser[$scope.chosenNpcIndex].content
        $scope.$watch(function() {
          $scope.npcdocElem.innerHTML = $scope
            .npcDocsToBeSignedByUser[$scope.chosenNpcIndex]
            .content
        })
      })
    }
    getDocs()

    // $scope.chosenNpcIndex = null
    $scope.signDocument = signDocument
    function signDocument() {
      BlockchainService
      .signDocument($scope.chosenNpcIndex)
      .then(function(resp) {
        console.log(resp)
        getDocs($scope.chosenNpcIndex)
      })
      .catch(function(err) {
        console.log(err)
      })
    }
    $scope.getCssClass = getCssClass
    function getCssClass(hasSigned) {
      if (hasSigned) {return "has-signed"}
      else {return "has-not-signed"}
    }
  }

}());

