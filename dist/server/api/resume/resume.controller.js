/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/resumes              ->  index
 * POST    /api/resumes              ->  create
 * GET     /api/resumes/:id          ->  show
 * PUT     /api/resumes/:id          ->  update
 * DELETE  /api/resumes/:id          ->  destroy
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.show = show;
exports.create = create;
exports.update = update;
exports.destroy = destroy;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _resume = require('./resume.model');

var _resume2 = _interopRequireDefault(_resume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var multer = require('multer');

var storage = multer.diskStorage({ //multers disk storage settings
  destination: function destination(req, file, cb) {
    cb(null, './resume');
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname); //tukar ext to pdf for security
  }
});
var upload = multer({
  storage: storage, limits: { fileSize: 1024 * 1024 * 4 }, fileFilter: function fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(pdf)$/)) {
      return cb('Only pdf files are allowed!');
    }
    cb(null, true);
  }
}).single('resume');

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

// Gets a list of Resumes
function index(req, res) {
  return _resume2.default.find().exec().then(respondWithResult(res)).catch(handleError(res));
}

// Gets a single Resume from the DB
function show(req, res) {
  return _resume2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(respondWithResult(res)).catch(handleError(res));
}

// Creates a new Resume in the DB
function create(req, res) {
  upload(req, res, function (err) {
    if (err) {
      res.end("Error:" + err);
    }
    console.log('req.file:', req.file);
    console.log('req.body:', req.body);
    if (req.file) res.end('Save to ' + req.file.path);
  });
}

// Updates an existing Resume in the DB
function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return _resume2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(saveUpdates(req.body)).then(respondWithResult(res)).catch(handleError(res));
}

// Deletes a Resume from the DB
function destroy(req, res) {
  return _resume2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(removeEntity(res)).catch(handleError(res));
}
//# sourceMappingURL=resume.controller.js.map
