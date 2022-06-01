// =================================================
// DEPENDCIES & DATA VARIABLES
// =================================================
// -- packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// =================================================
// DATA SCHEMAS
// =================================================
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleID: String
});

// =================================================
// EXPORTS
// =================================================
const User = mongoose.model('User', userSchema);
module.exports = User;
