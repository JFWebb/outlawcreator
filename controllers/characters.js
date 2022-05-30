// =================================================
// DEPENDCIES & DATA VARIABLES
// =================================================
// -- packages
const express = require('express');
const router = express.Router();

// =================================================
// MOUNT ROUTES
// =================================================
// Index
// -- Home Page
app.get('/', (req, res) => {
    res.render('dashboard.ejs');
})
// New
// Destroy
// Update
// Create
// Edit
// Show

// =================================================
// EXPORT
module.exports = router;