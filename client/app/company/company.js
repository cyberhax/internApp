'use strict';

angular.module('meApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('company', {
        url: '/company',
        template: '<company></company>',
        authenticate: 'company'
      });
  });
