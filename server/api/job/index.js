'use strict';

var express = require('express');
var controller = require('./job.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/cp/:name', controller.indexCompany);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.put('/user/:id',controller.applyJob);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
