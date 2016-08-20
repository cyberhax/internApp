/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/resumes              ->  index
 * POST    /api/resumes              ->  create
 * GET     /api/resumes/:id          ->  show
 * PUT     /api/resumes/:id          ->  update
 * DELETE  /api/resumes/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Resume from './resume.model';
var multer = require('multer');

var storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, './resume')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)//tukar ext to pdf for security
  }
});
var upload = multer({
  storage: storage,limits:{fileSize:1024*1024*4},fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(pdf)$/)) {
      return cb('Only pdf files are allowed!');
    }
    cb(null, true);
  }
}).single('resume');


function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Resumes
export function index(req, res) {
  return Resume.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Resume from the DB
export function show(req, res) {
  return Resume.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Resume in the DB
export function create(req, res) {
  upload(req,res,function (err) {
    if(err){
      res.end("Error:"+err);
    }
    console.log('req.file:',req.file);
    console.log('req.body:',req.body);
    if(req.file)
    res.end(`Save to ${req.file.path}`);

  });
}

// Updates an existing Resume in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Resume.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Resume from the DB
export function destroy(req, res) {
  return Resume.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
