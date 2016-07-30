'use strict';

(function(){

class DashComponent {
  constructor($scope,$http,socket,Auth) {
    //$scope.jobs = [];
    //$scope.jobs = [{'name':'programmer','salary':1000,'company':{'name':'ipg','website':'http://google.com'}}];
    //$scope.companies = ['ipg','test'];
    $http.get('/api/jobs').success((jobs)=>{
        $scope.jobs = jobs;
        socket.syncUpdates('job',$scope.jobs);
    });
      
    $http.get('/api/users/dash').success((companies)=>{
       $scope.companies = companies;
        socket.syncUpdates('company',$scope.companies);
    });


    $scope.applyJob = function (index) {
        console.log('apply job : '+$scope.jobs[index]._id);
        this.lala = {
            jobID:$scope.jobs[index]._id,
            userID:Auth.getCurrentUser()._id
        };
        //console.log(this.apply);
        $http.put('/api/jobs/user/'+this.lala.userID,this.lala).success((obj)=>{
            console.log(obj);
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
