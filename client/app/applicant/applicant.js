'use strict';

angular.module('meApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('applicant', {
        url: '/applicant',
        template: '<applicant></applicant>'
      });
  });
