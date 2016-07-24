'use strict';

describe('Component: MemberComponent', function () {

  // load the controller's module
  beforeEach(module('meApp'));

  var MemberComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    MemberComponent = $componentController('member', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
