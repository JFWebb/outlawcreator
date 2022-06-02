//Disclamer: I do not own the rights to Dusk City Outlaws. I am not affiliated with Dusk City Outlaws or Scratch Pad Publishing. All information regarding character types, cartels, and character attributes belong to Dusk City Outlaws and Scratchpad Publishing. This is a personal product designed for personal use. 
// =================================================
// DEPENDCIES 
// =================================================
const express = require('express');
const router = express.Router();
const passport = require('passport');
const Character = require('../models/characters.js');

// =================================================
// MOUNT ROUTES
// =================================================
// -- Homepage
router.get('/', (req, res) => {
    res.render('index.ejs');
});

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

// -- Redirect based on database empty or not
// LINK TO START BUTTON IF COME BACK
router.get('/start', (req, res) => {
    if (Character.count === 0 ) {
        res.redirect('/characters/new-character');
    } else {
        res.redirect('/characters/seed');
    }
});
// =================================================
// EXPORTS
// =================================================
module.exports = router;