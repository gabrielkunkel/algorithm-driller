/**
 * Created by gabrielkunkel on 2/1/16 in JavaScript.
 */

var express = require('express');
var controller = require('./challenge.controller');
var mw = require('../../auth/middleware');

var router = express.Router();

  router.get('/', mw.ensureAuthenticated, controller.index);
  router.get('/:id', mw.ensureAuthenticated, controller.show);
  router.post('/', mw.ensureAuthenticatedAdmin, controller.create);
  router.put('/:id', mw.ensureAuthenticatedAdmin, controller.update);
  router.delete('/:id', mw.ensureAuthenticatedAdmin, controller.destroy);

module.exports = router;