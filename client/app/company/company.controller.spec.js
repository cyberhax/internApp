'use strict';

describe('Component: CompanyComponent', function () {

  // load the controller's module
  beforeEach(module('meApp'));

  var CompanyComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    CompanyComponent = $componentController('company', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
