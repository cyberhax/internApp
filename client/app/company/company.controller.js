'use strict';

(function(){

class CompanyComponent {
  constructor($scope,$http,Auth,socket,$mdDialog) {
    $scope.jobs = [];
    $scope.company = Auth.getCurrentUser().name;
    //console.log(this.company);
      
    $http.get('/api/jobs/cp/'+$scope.company).success((jobs)=>{
        console.log(jobs);
        $scope.jobs = jobs;
        socket.syncUpdates('job',$scope.jobs);
    }).error((err)=>{
        console.log(err);
    });
  
    $scope.createJob = function(){
        $scope.job.company =$scope.company;
        if($scope.job.name && $scope.job.salary && $scope.job.company){
        console.log($scope.job);
        $http.post('/api/jobs',$scope.job).success(()=>{
           $scope.job.name = '';
           $scope.job.salary = '';
           $scope.job.description = '';
        });
        } //end if
    };
      
    $scope.removeJob = function(index,ev){
        var confirm = $mdDialog.confirm()
            .title('Would you like to delete your the job?')
            .textContent('This action will remove the job from database.')
            .ariaLabel('Lucky day')
            .targetEvent(ev)
            .ok('Please do it!')
            .cancel('Wait I need this one.');
        $mdDialog.show(confirm).then(function() {
            $http.delete('/api/jobs/'+$scope.jobs[index]._id)
                .success(()=>{
                });
        }, function() {

        });

    };
  }
}

angular.module('meApp')
  .component('company', {
    templateUrl: 'app/company/company.html',
    controller: CompanyComponent,
    controllerAs: 'companyCtrl',
    authenticate:'company'
  });

})();
