'use strict';

(function(){

class UserComponent {
  constructor($scope,$http,socket) {
    $http.get('/api/users/student').success((students)=>{
        //console.log(students);
       $scope.students = students;
        socket.syncUpdates('user',$scope.students);
    });
    $scope.editStudent = function (index) {
        $http.put('/api/users/student/'+$scope.students[index]._id,$scope.students[index]).success(()=>{
            console.log('Done update');
        });
    };
      $scope.active = [
      {value: true, text: 'true'},
      {value: false, text: 'false'}
      ];
      $scope.status = [
          {value: 'ok', text: 'ok'},
          {value: 'pending', text: 'pending'},
          {value: 'fail', text: 'fail'},
          {value: 'not start', text: 'not start'}
      ];
  }
}

angular.module('meApp')
  .component('user', {
    templateUrl: 'app/user/user.html',
    controller: UserComponent,
    controllerAs: 'userCtrl'
  });

})();
