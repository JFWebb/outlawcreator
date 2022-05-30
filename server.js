// =================================================
// DEPENDCIES & DATA VARIABLES
// =================================================
// -- packages
const express = require('express');
const methodOverride = require('method-override');
const app = express();

// -- routers
const charController = require('./controllers/characters.js');

// -- databases

// -- env vars
const PORT = process.env.PORT || 3000;

// =================================================
// MOUNT MIDDLEWARE
// =================================================
// -- packages
// ---- encodes new data to req.body ; extented: true for nested objects
// app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));
// app.use(express.static('public'));

// -- routers
app.use('/characters', charController)

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