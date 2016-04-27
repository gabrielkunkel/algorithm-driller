/**
 * Created by gabrielkunkel on 2/1/16 in JavaScript.
 */

var _ = require('lodash');
var Challenge = require('./challenge.model.js');

module.exports = function (app) {

  /* Add Challenge */
  app.post('/challenge', function (req, res) {
    var newChallenge = new Challenge(req.body);
    newChallenge.save(function (err) {
      if (err) {
        res.json({ message: 'error during challenge create', error: err });
      }
      else {
        res.json({message: 'Challenge added.'});
      }
    });
  });

  /* Get All Challenges */
  app.get('/challenge', function (req, res) {
    Challenge.find(function (err, challenges) {
      if (err) {
        res.json({ message: 'error returning challenges', error: err });
      }
      else {
        res.json( { message: 'challenges found successfully', data: challenges });
      }
    });
  });

  /* Get A Particular Challenge */
  app.get('/challenge/:id', function (req, res) {
    Challenge.findById(req.params.id, function (err, challenge) {
      if (err) {
        res.json({ message: 'There was an error returning your challenge.', error: err });
      }
      else if (challenge) {
        res.json( { message: 'Challenge found.', data: challenge });
      }
      else {
        res.json( { message: 'The challenge requested does not exist.' });
      }
    });
  });

  /* Update Challenge */
  app.put('/challenge/:id', function (req, res) {
    Challenge.findById(req.params.id, function (err, challenge) {
      if (err) {
        res.json({ message: 'There was an error updating that challenge.', error: err });
      }
      else if (challenge) {
        _.merge(challenge, req.body);
        challenge.save(function (err) {
          if (err) {
            res.json( { message: 'There was an error saving your update.', error: err });
          }
          else {
            res.json( { message: 'Challenge was updated successfully.' });
          }

        });
      }
      else {
        res.json({ message: 'Applicable challenge not found.'});
      }

    });
  });

  /* Delete a Challenge */
  app.delete('/challenge/:id', function (req, res) {
    Challenge.findByIdAndRemove(req.params.id, function (err) {
      if (err) {
        res.json({ message: 'Error in attempting to delete challenge.', error: err });
      }
      else {
        res.json({ message: 'Challenge deleted.' });
      }

    });
  });

};