'use strict';

angular.module('meApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/user',
        template: '<user></user>'
      });
  });
