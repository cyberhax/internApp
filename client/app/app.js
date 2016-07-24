'use strict';

angular.module('meApp', ['meApp.auth', 'meApp.admin', 'meApp.constants', 'ngCookies', 'ngResource',
    'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
