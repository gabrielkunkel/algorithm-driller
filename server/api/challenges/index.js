/**
 * Created by gabrielkunkel on 2/1/16 in JavaScript.
 */

var _ = require('lodash');

module.exports = function (app) {

  var challenges = [];

  /* Add Challenge */
  app.post('/challenge', function (req, res) {
    challenges.push(req.body);
    res.json({message: 'Challenge added.'});
  });

  /* Get All Challenges */
  app.get('/challenge', function (req, res) {
    res.send(challenges);
  });

  /* Get A Particular Challenge */
  app.get('/challenge/:id', function (req, res) {
    res.send(_.find(challenges, { id: req.params.id }));
  });

  /* Update Challenge */
  app.put('/challenge/:id', function (req, res) {
    var index = _.findIndex(challenges, { id: req.params.id });
    _.merge(challenges[index], req.body);
    res.json({ message: 'Challenge updated.' });
  });

  app.delete('/cat/:id', function (req, res) {
    _.remove(challenges, function (challenge) {
      return challenge.id === req.params.id;
    });
    res.json({ message: 'Challenge removed' });
  });

};