'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket,Auth) {
      this.$http = $http;
      this.socket = socket;

      $scope.name = Auth.getCurrentUser().name;
      console.log($scope.name);
    }


  }

  angular.module('meApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
