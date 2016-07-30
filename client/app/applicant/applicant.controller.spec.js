'use strict';

describe('Component: ApplicantComponent', function () {

  // load the controller's module
  beforeEach(module('meApp'));

  var ApplicantComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ApplicantComponent = $componentController('applicant', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
