'use strict';

describe('Component: ResumeComponent', function () {

  // load the controller's module
  beforeEach(module('meApp'));

  var ResumeComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ResumeComponent = $componentController('resume', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
