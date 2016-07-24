'use strict';

angular.module('meApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dash', {
        url: '/dash',
        template: '<dash></dash>'
      });
  });
