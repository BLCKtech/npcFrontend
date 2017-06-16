(function () {
  'use strict';

  angular
    .module('angular-docker-boilerplate')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    })
    .state('createNpc', {
      url: '/createNpc',
      templateUrl: 'app/createNpc/createNpc.html',
      controller: 'CreateNpcCtrl'
    })
    .state('signNpc', {
      url: '/signNpc',
      templateUrl: 'app/signNpc/signNpc.html',
      controller: 'SignNpcCtrl'
    });
  }
}());
