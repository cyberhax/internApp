'use strict';

angular.module('meApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('member', {
        url: '/member',
        template: '<member></member>'
      });
  });
