'use strict';

(function(){

class ApplicantComponent {
  constructor() {

  }
}

angular.module('meApp')
  .component('applicant', {
    templateUrl: 'app/applicant/applicant.html',
    controller: ApplicantComponent,
    controllerAs: 'applicantCtrl'
  });

})();
