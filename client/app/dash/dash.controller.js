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
      
    $http.get('/api/companys').success((companies)=>{
       $scope.companies = companies;
    });
      
    $scope.createJob = function(){
        if($scope.job.name && $scope.job.salary){
        console.log($scope.job);
        $http.post('/api/jobs',$scope.job).success(()=>{
           $scope.job.name = '';
           $scope.job.salary = '';
           $scope.job.description = '';
           $scope.job.company = '';
        });
        } //end if
    };
    
    $scope.removeJob = function(index){
        $http.delete('/api/jobs/'+$scope.jobs[index]._id)
        .success(()=>{ 
        });
    };
  }
}

angular.module('meApp')
  .component('dash', {
    templateUrl: 'app/dash/dash.html',
    controller: DashComponent,
    controllerAs: 'dashCtrl'
  });

})();
