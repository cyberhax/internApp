'use strict';

(function(){

class MemberComponent {
  constructor($scope,$http,socket) {
    this.message = 'Hello';
    $scope.members = [];
    
    $http.get('/api/members').success((members)=>{
        $scope.members = members;
        socket.syncUpdates('member',$scope.members);
    });
      
    $scope.createMember = function() {
      if ($scope.member && $scope.member.name) {
        $http.post('/api/members', $scope.member).success(function() {
          $scope.member.name = '';
        });
      }
    };
      
    $scope.removeMember = function(index){
        $http.delete('/api/members/'+$scope.members[index]._id)
        .success(function(){
        })
        .error(function(err){
            console.log(err);
        });
    };
  }
}
angular.module('meApp')
  .component('member', {
    templateUrl: 'app/member/member.html',
    controller: MemberComponent,
    controllerAs: 'memberCtrl'
  });

})();
