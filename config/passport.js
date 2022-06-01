// =================================================
// DEPENDCIES
// =================================================
const passport = require('passport');

// -- variable must be named with upper camel case! cannot flex on this naming
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// -- models
const User = require('../models/user.js');


// =================================================
// Call passport.use method to plug-in an instance of 
// OAuth strategy and provide a verify callback func
// that will be called whenever a user logs in w/ OAuth
// =================================================
passport.use(new GoogleStrategy({
    // plug-in  instance of OAuth
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
    },
    // provide verify callback function
    function(accessToken, refreshToken, profile, cb){
        User.findOne({'googleID': profile.id}, function(err, user) {
            if (err) return cb(err);
            if (user) {
                return cb(null, user);
            } else {
                // new user via OAuth
                const newUser = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleID: profile.id
                });
                newUser.save(function(err) {
                    if (err) return cb(err);
                    return cb(null, newUser);
                });
            }
        });
    }
));

// =================================================
// Define a serializeUser method that Passport will call
// after the verify callback to let Passport know what data
// we want to store in the session to id our user
// =================================================
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// =================================================
// Define a deserializeUser method that Passport will
// call on each request when a user is logged in. It will
// provide Pssport with the user from the db we want
// assigned to the req.user object. 
// =================================================
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user)
    })
})