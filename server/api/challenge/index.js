/**
 * Created by gabrielkunkel on 2/1/16 in JavaScript.
 */

var express = require('express');
var _ = require('lodash');
var controller = require('./challenge.controller');

var router = express.Router();

  router.get('/', controller.index);
  router.get('/:id', controller.show);
  router.post('/', controller.create);
  router.put('/:id', controller.update);
  router.delete('/:id', controller.destroy);

module.exports = router; // todo: add this to a separate routes file