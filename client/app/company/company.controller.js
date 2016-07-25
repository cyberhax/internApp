'use strict';

(function(){

class CompanyComponent {
  constructor($scope,$http,Auth) {
    this.message = 'Hello';
    this.company = Auth.getCurrentUser().name;
    console.log(this.company);
  }
}

angular.module('meApp')
  .component('company', {
    templateUrl: 'app/company/company.html',
    controller: CompanyComponent,
    controllerAs: 'companyCtrl'
  });

})();
