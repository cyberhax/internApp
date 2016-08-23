/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/jobs              ->  index
 * POST    /api/jobs              ->  create
 * GET     /api/jobs/:id          ->  show
 * PUT     /api/jobs/:id          ->  update
 * DELETE  /api/jobs/:id          ->  destroy
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.indexCompany = indexCompany;
exports.show = show;
exports.applyJob = applyJob;
exports.create = create;
exports.update = update;
exports.destroy = destroy;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _job = require('./job.model');

var _job2 = _interopRequireDefault(_job);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function (entity) {
    var updated = _lodash2.default.merge(entity, updates);
    return updated.save().then(function (updated) {
      return updated;
    });
  };
}

function removeEntity(res) {
  return function (entity) {
    if (entity) {
      return entity.remove().then(function () {
        res.status(204).end();
      });
    }
  };
}

function handleEntityNotFound(res) {
  return function (entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Jobs
function index(req, res) {
  return _job2.default.find().exec().then(respondWithResult(res)).catch(handleError(res));
}

function indexCompany(req, res) {
  return _job2.default.find({ company: req.params.name }).exec().then(respondWithResult(res)).catch(handleError(res));
}

// Gets a single Job from the DB
function show(req, res) {
  return _job2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(respondWithResult(res)).catch(handleError(res));
}

// Gets a single Job from the DB and update
function applyJob(req, res) {
  return _job2.default.update({ _id: req.body.jobID }, { '$addToSet': { 'ygapply': req.params.id } }).then(handleEntityNotFound(res)).then(respondWithResult(res)).catch(handleError(res));
}
// Creates a new Job in the DB
function create(req, res) {
  console.log('req body:', req.body);
  return _job2.default.create(req.body).then(respondWithResult(res, 201)).catch(handleError(res));
}

// Updates an existing Job in the DB
function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return _job2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(saveUpdates(req.body)).then(respondWithResult(res)).catch(handleError(res));
}

// Deletes a Job from the DB
function destroy(req, res) {
  return _job2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(removeEntity(res)).catch(handleError(res));
}
//# sourceMappingURL=job.controller.js.map
