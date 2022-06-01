// =================================================
// DEPENDCIES 
// =================================================
const express = require('express');
const router = express.Router();
const passport = require('passport');

// =================================================
// MOUNT ROUTES
// =================================================
// -- Homepage
router.get('/', (req, res) => {
    res.render('index.ejs', {
        user: req.user
    });
})

// -- Google Auth Login Route
router.get('/auth/google', passport.authenticate(
    'google',
    {scope: ['profile', 'email']}
));

// -- Google oAuth Callback Route
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect : '/characters/',
        failureRedirect: '/'
    }
));

// OAuth Logout Route
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

// =================================================
// EXPORTS
// =================================================
module.exports = router;