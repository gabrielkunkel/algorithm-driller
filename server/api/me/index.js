/**
 * Created by gabrielkunkel on 5/9/16 in JavaScript.
 */

//
// /*
//  |--------------------------------------------------------------------------
//  | GET /api/me
//  |--------------------------------------------------------------------------
//  */
// router.get('/api/me', ensureAuthenticated, function(req, res) {
//   User.findById(req.user, function(err, user) {
//     res.send(user);
//   });
// });
//
// /*
//  |--------------------------------------------------------------------------
//  | PUT /api/me
//  |--------------------------------------------------------------------------
//  */
// router.put('/api/me', ensureAuthenticated, function(req, res) {
//   User.findById(req.user, function(err, user) {
//     if (!user) {
//       return res.status(400).send({ message: 'User not found' });
//     }
//     user.displayName = req.body.displayName || user.displayName;
//     user.email = req.body.email || user.email;
//     user.save(function(err) {
//       res.status(200).end();
//     });
//   });
// });