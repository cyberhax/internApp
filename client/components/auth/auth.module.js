'use strict';

angular.module('meApp.auth', ['meApp.constants', 'meApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
