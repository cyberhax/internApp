'use strict';

(function(){

class ResumeComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('meApp')
  .component('resume', {
    templateUrl: 'app/resume/resume.html',
    controller: ResumeComponent,
    controllerAs: 'resumeCtrl'
  });

})();
