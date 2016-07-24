'use strict';

(function(){

class DashComponent {
  constructor($scope) {
    this.message = 'Hello';
    $scope.jobs = [{'name':'programmer','salary':1000,'company':{'name':'ipg','website':'http://google.com'}}];
    $scope.companies = ['ipg','test'];
  }
}

angular.module('meApp')
  .component('dash', {
    templateUrl: 'app/dash/dash.html',
    controller: DashComponent,
    controllerAs: 'dashCtrl'
  });

})();
