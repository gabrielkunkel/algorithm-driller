/**
 * Created by gabrielkunkel on 2/1/16 in JavaScript.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/* Set-Up  */
mongoose.connect('mongod://localhost/algorithmdriller');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/* Routes */
var challenges = require("./api/challenges/")(app);

/* Get Server Listening*/
var server = app.listen(3333, function () {
  console.log('Server running on at http://localhost:3333/');
});
