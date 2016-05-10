/**
 * Created by gabrielkunkel on 2/1/16 in JavaScript.
 */

var express = require('express');
var _ = require('lodash');
var controller = require('./challenge.controller');
var mw = require('../../auth/middleware');

var router = express.Router();

  router.get('/', mw.ensureAuthenticated, controller.index);
  router.get('/:id', mw.ensureAuthenticated, controller.show);
  router.post('/', mw.ensureAuthenticatedPro, controller.create);
  router.put('/:id', mw.ensureAuthenticatedPro, controller.update);
  router.delete('/:id', mw.ensureAuthenticatedPro, controller.destroy);

module.exports = router; // todo: add this to a separate routes file