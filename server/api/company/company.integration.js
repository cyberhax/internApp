'use strict';

var app = require('../..');
import request from 'supertest';

var newCompany;

describe('Company API:', function() {

  describe('GET /api/companys', function() {
    var companys;

    beforeEach(function(done) {
      request(app)
        .get('/api/companys')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          companys = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      companys.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/companys', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/companys')
        .send({
          name: 'New Company',
          info: 'This is the brand new company!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newCompany = res.body;
          done();
        });
    });

    it('should respond with the newly created company', function() {
      newCompany.name.should.equal('New Company');
      newCompany.info.should.equal('This is the brand new company!!!');
    });

  });

  describe('GET /api/companys/:id', function() {
    var company;

    beforeEach(function(done) {
      request(app)
        .get('/api/companys/' + newCompany._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          company = res.body;
          done();
        });
    });

    afterEach(function() {
      company = {};
    });

    it('should respond with the requested company', function() {
      company.name.should.equal('New Company');
      company.info.should.equal('This is the brand new company!!!');
    });

  });

  describe('PUT /api/companys/:id', function() {
    var updatedCompany;

    beforeEach(function(done) {
      request(app)
        .put('/api/companys/' + newCompany._id)
        .send({
          name: 'Updated Company',
          info: 'This is the updated company!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedCompany = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCompany = {};
    });

    it('should respond with the updated company', function() {
      updatedCompany.name.should.equal('Updated Company');
      updatedCompany.info.should.equal('This is the updated company!!!');
    });

  });

  describe('DELETE /api/companys/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/companys/' + newCompany._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when company does not exist', function(done) {
      request(app)
        .delete('/api/companys/' + newCompany._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
