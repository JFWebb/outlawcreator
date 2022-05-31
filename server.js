// =================================================
// DEPENDCIES & DATA VARIABLES
// =================================================
// -- packages
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const mongoose = require('mongoose');


// -- routers
const charController = require('./controllers/characters.js');

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

// -- routers
app.use('/characters', charController)
// app.use('/skills', skillController)
// =================================================
// MOUNT ROUTES
// =================================================
// Index
// -- Home Page
app.get('/', (req, res) => {
    res.render('index.ejs');
})
// New
// Destroy
// Update
// Create
// Edit
// Show

// =================================================
// Port Listening?
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});