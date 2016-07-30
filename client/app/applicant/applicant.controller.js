'use strict';

(function(){

class ApplicantComponent {
  constructor($scope) {
      $http.get('/api/jobs')
  }
}

angular.module('meApp')
  .component('applicant', {
    templateUrl: 'app/applicant/applicant.html',
    controller: ApplicantComponent,
    controllerAs: 'applicantCtrl'
  });

})();
