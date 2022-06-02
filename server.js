// Disclamer: I do not own the rights to Dusk City Outlaws. I am not affiliated with Dusk City Outlaws or Scratch Pad Publishing. All information regarding character types, cartels, and character attributes belong to Dusk City Outlaws and Scratchpad Publishing. This is a personal product designed for personal use. 
// =================================================
// DEPENDCIES & DATA VARIABLES
// =================================================
// -- packages
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');

// -- routers
const charController = require('./controllers/characters.js');
const indexRoutes = require('./routes/index.js');

// -- databases
// ---- character database
mongoose.connect(process.env.CHARACTER_DB, {
    useUnifiedTopology: true,
});

// ---- database connection error / success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// -- passport
require('./config/passport');

// -- port vars
const PORT = process.env.PORT || 3000;

// =================================================
// MOUNT MIDDLEWARE
// =================================================
// -- packages
// ---- encodes new data to req.body ; extented: true for nested objects
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static('public'));
app.use(session({
    secret: 'Perelandro',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// -- routers
app.use('/characters', charController);
app.use('/', indexRoutes);

// =================================================
// Port Listening?
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});