'use strict';

(function(){

class UserComponent {
  constructor($scope,$http,socket) {
    $http.get('/api/users/student').success((students)=>{
        //console.log(students);
       $scope.students = students;
        socket.syncUpdates('user',$scope.students);
    });


      $scope.active = [
      {value: true, text: 'true'},
      {value: false, text: 'false'}
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
