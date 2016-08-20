'use strict';

(function(){

class DashComponent {
  constructor($scope,$http,socket,Auth,$mdDialog) {

    $http.get('/api/jobs').success((jobs)=>{
        $scope.jobs = jobs;
        socket.syncUpdates('job',$scope.jobs);
    });
      
    $http.get('/api/users/dash').success((companies)=>{
       $scope.companies = companies;
        socket.syncUpdates('company',$scope.companies);
    });

    $scope.applyJob = function (index,ev) {
        var role = Auth.getCurrentUser().role;
        if (role === "user") {
            console.log('apply job : ' + $scope.jobs[index]._id);
            this.lala = {
                jobID: $scope.jobs[index]._id,
                userID: Auth.getCurrentUser()._id

            };
            $http.put('/api/jobs/user/' + this.lala.userID, this.lala).success((obj)=> {
                if (obj.nModified === 0) {
                    $mdDialog.show($mdDialog.alert()
                        .title('Alert!!!')
                        .textContent('Already apply meh')
                        .ok('OK!!!')
                        .targetEvent(ev)
                    );
                }
            });
        };
    }
  }
}

angular.module('meApp')
  .component('dash', {
    templateUrl: 'app/dash/dash.html',
    controller: DashComponent,
    controllerAs: 'dashCtrl'
  });

})();
