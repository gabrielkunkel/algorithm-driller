/**
 * Created by gabrielkunkel on 2/1/16 in JavaScript.
 */

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var challenges = require("./api/challenges/")(app);

app.get('/', function (req, res) {
  // res.send('Hey, man!');
  res.json({ myString: 'Hey man! You got Json\'d!'});
});

var server = app.listen(3333, function () {
  console.log('Server running on at http://localhost:3333/');
});
