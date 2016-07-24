'use strict';

describe('Component: DashComponent', function () {

  // load the controller's module
  beforeEach(module('meApp'));

  var DashComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    DashComponent = $componentController('dash', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
