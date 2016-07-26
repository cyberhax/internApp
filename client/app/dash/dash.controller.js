'use strict';

(function(){

class DashComponent {
  constructor($scope,$http,socket) {
    this.message = 'Hello';
    //$scope.jobs = [];
    //$scope.jobs = [{'name':'programmer','salary':1000,'company':{'name':'ipg','website':'http://google.com'}}];
    //$scope.companies = ['ipg','test'];
     
    $http.get('/api/jobs').success((jobs)=>{
        $scope.jobs = jobs;
        socket.syncUpdates('job',$scope.jobs);
    });
      
    $http.get('/api/users/dash').success((companies)=>{
       $scope.companies = companies;
    });
    
  }
}

angular.module('meApp')
  .component('dash', {
    templateUrl: 'app/dash/dash.html',
    controller: DashComponent,
    controllerAs: 'dashCtrl'
  });

})();
