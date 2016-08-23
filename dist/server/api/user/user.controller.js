'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.indexCompany = indexCompany;
exports.indexStudent = indexStudent;
exports.create = create;
exports.show = show;
exports.destroy = destroy;
exports.changePassword = changePassword;
exports.me = me;
exports.authCallback = authCallback;
exports.update = update;

var _user = require('./user.model');

var _user2 = _interopRequireDefault(_user);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _environment = require('../../config/environment');

var _environment2 = _interopRequireDefault(_environment);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validationError(res, statusCode) {
  statusCode = statusCode || 422;
  return function (err) {
    res.status(statusCode).json(err);
  };
}
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
function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
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

/**
 * Get list of users
 * restriction: 'admin'
 */
function index(req, res) {
  return _user2.default.find({}, '-salt -password').exec().then(function (users) {
    res.status(200).json(users);
  }).catch(handleError(res));
}

function indexCompany(req, res) {
  //'/api/dash'
  return _user2.default.find({ 'role': 'company' }, '-salt -password').exec().then(function (users) {
    res.status(200).json(users);
  }).catch(handleError(res));
}

function indexStudent(req, res) {
  //'/api/student'
  return _user2.default.find({ 'role': 'user' }, '-salt -password').exec().then(function (users) {
    res.status(200).json(users);
  }).catch(handleError(res));
}
/**
 * Creates a new user
 */
function create(req, res, next) {
  var newUser = new _user2.default(req.body);
  newUser.provider = 'local';
  //newUser.role = 'user';
  newUser.save().then(function (user) {
    var token = _jsonwebtoken2.default.sign({ _id: user._id }, _environment2.default.secrets.session, {
      expiresIn: 60 * 60 * 5
    });
    res.json({ token: token });
  }).catch(validationError(res));
}

/**
 * Get a single user
 */
function show(req, res, next) {
  var userId = req.params.id;

  return _user2.default.findById(userId).exec().then(function (user) {
    if (!user) {
      return res.status(404).end();
    }
    res.json(user.profile);
  }).catch(function (err) {
    return next(err);
  });
}

/**
 * Deletes a user
 * restriction: 'admin'
 */
function destroy(req, res) {
  return _user2.default.findByIdAndRemove(req.params.id).exec().then(function () {
    res.status(204).end();
  }).catch(handleError(res));
}

/**
 * Change a users password
 */
function changePassword(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  return _user2.default.findById(userId).exec().then(function (user) {
    if (user.authenticate(oldPass)) {
      user.password = newPass;
      return user.save().then(function () {
        res.status(204).end();
      }).catch(validationError(res));
    } else {
      return res.status(403).end();
    }
  });
}

/**
 * Get my info
 */
function me(req, res, next) {
  var userId = req.user._id;

  return _user2.default.findOne({ _id: userId }, '-salt -password').exec().then(function (user) {
    // don't ever give out the password or salt
    if (!user) {
      return res.status(401).end();
    }
    res.json(user);
  }).catch(function (err) {
    return next(err);
  });
}

/**
 * Authentication callback
 */
function authCallback(req, res, next) {
  res.redirect('/');
}

// Updates an existing User in the DB
function update(req, res) {
  console.log(req.body._id);
  if (req.body._id) {
    delete req.body._id;
  }
  return _user2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(saveUpdates(req.body)).then(respondWithResult(res)).catch(handleError(res));
}
//# sourceMappingURL=user.controller.js.map
