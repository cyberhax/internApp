'use strict';

angular.module('meApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('resume', {
        url: '/resume',
        template: '<resume></resume>'
      });
  });
