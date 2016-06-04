/**
 * Created by gabrielkunkel on 5/9/16 in JavaScript.
 */

var jwt = require('jwt-simple');
var moment = require('moment');
var secrets = require('../secrets');


/*
 |--------------------------------------------------------------------------
 | Generate JSON Web Token
 |--------------------------------------------------------------------------
 */
exports.createJWT = function(user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix(),
    admin: user.admin,
    pro: user.pro
  };
  return jwt.encode(payload, secrets.TOKEN_SECRET);
};


/*
 |--------------------------------------------------------------------------
 | Ensure Authenticated Per User Type Middleware
 |--------------------------------------------------------------------------
 */
exports.ensureAuthenticated = function(req, res, next) {
  if (!req.header('Authorization')) {
    return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
  }
  var token = req.header('Authorization').split(' ')[1];

  var payload = null;
  try {
    payload = jwt.decode(token, secrets.TOKEN_SECRET);
  }
  catch (err) {
    return res.status(401).send({ message: err.message });
  }

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: 'Token has expired' });
  }
  req.user = payload.sub;
  next();
};

exports.ensureAuthenticatedAdmin = function (req, res, next) {

  if (!req.header('Authorization')) {
    return res.status(401).send({message: 'Please make sure your request has an Authorization header'});
  }
  var token = req.header('Authorization').split(' ')[1];

  var payload = null;
  try {
    payload = jwt.decode(token, secrets.TOKEN_SECRET);
  }
  catch (err) {
    return res.status(401).send({message: err.message});
  }

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({message: 'Token has expired'});
  }
  
  if (payload.admin !== true) {
    return res.status(403).send({mesage: 'You are not authorized. You must have admin privileges.'});
  }
  
  req.user = payload.sub;

  next();

};

exports.ensureAuthenticatedPro = function (req, res, next) {

  if (!req.header('Authorization')) {
    return res.status(401).send({message: 'Please make sure your request has an Authorization header'});
  }
  var token = req.header('Authorization').split(' ')[1];

  var payload = null;
  try {
    payload = jwt.decode(token, secrets.TOKEN_SECRET);
  }
  catch (err) {
    return res.status(401).send({message: err.message});
  }

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({message: 'Token has expired'});
  }

  if (payload.pro !== true || payload.admin !== true) {
    return res.status(403).send({mesage: 'You are not authorized. You must have pro or admin user privileges.'});
  }

  req.user = payload.sub;

  next();

};
