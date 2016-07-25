'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var companyCtrlStub = {
  index: 'companyCtrl.index',
  show: 'companyCtrl.show',
  create: 'companyCtrl.create',
  update: 'companyCtrl.update',
  destroy: 'companyCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var companyIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './company.controller': companyCtrlStub
});

describe('Company API Router:', function() {

  it('should return an express router instance', function() {
    companyIndex.should.equal(routerStub);
  });

  describe('GET /api/companys', function() {

    it('should route to company.controller.index', function() {
      routerStub.get
        .withArgs('/', 'companyCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/companys/:id', function() {

    it('should route to company.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'companyCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/companys', function() {

    it('should route to company.controller.create', function() {
      routerStub.post
        .withArgs('/', 'companyCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/companys/:id', function() {

    it('should route to company.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'companyCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/companys/:id', function() {

    it('should route to company.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'companyCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/companys/:id', function() {

    it('should route to company.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'companyCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
