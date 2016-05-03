/**
 * Created by gabrielkunkel on 2/1/16 in JavaScript.
 */

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var secrets = require('./secrets.js');
var config = require('./privateconfig.js');


var app = express();

/* Set-Up  */
app.use(morgan('combined'));
mongoose.connect(secrets.MONGO_URI);
mongoose.connection.on('error', function(err) {
  console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});
app.set('port', process.env.port || config.PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});


/* Routes */
// todo: switch challenge api to proper app.use and routes
// var challenge = require("./api/challenge/")(app);
// app.use('/api/user', require('./api/user'));
app.use('/auth/google', require('./auth'));

// app.use(express.static(path.join(__dirname, '../../client')));



/* Get Server Listening*/
var server = app.listen(app.get('port'), function () {
  console.log('Server listening on: ' + server.address().port);
});

exports = module.exports = app;