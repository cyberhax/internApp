'use strict';

angular.module('meApp', ['meApp.auth', 'meApp.admin', 'meApp.constants', 'ngCookies', 'ngResource',
    'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap', 'validation.match','xeditable',
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  }).run(function(editableOptions) {
      console.log('tukar theme');
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});