// Disclamer: I do not own the rights to Dusk City Outlaws. I am not affiliated with Dusk City Outlaws or Scratch Pad Publishing. All information regarding character types, cartels, and character attributes belong to Dusk City Outlaws and Scratchpad Publishing. This is a personal product designed for personal use. 

// =================================================
// DEPENDCIES & DATA VARIABLES
// =================================================
// -- packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// =================================================
// DATA SCHEMAS
// =================================================

// -- Individual Skills
const iSkillsSchema = new Schema ({
    skillName: {type: String, required: false},
    skillPerc: {type: Number, required: false}
});

// -- Character
const charSchema = new Schema ({
    name: {type: String, required: true},
    cartel: {type: String, required: true},
    speciality: {type: String, required: true},
    description: {type: String, required: false},
    quirks: {type: [String], required: false},
    // cKnowledge: {type: [String], required: false},
    iKnowledge: {type: String, required: false},
    // sSkills: sSkillsSchema,
    iSkills: [iSkillsSchema],
    influence: {type: Boolean, default: true},
    luck: {type: Number, default: 100},
    image: {type: String, default:"https://i.imgur.com/eiJ2eClm.png"},
    googleID: String
});

// =================================================
// EXPORTS
// =================================================
const Character = mongoose.model('Character', charSchema);
module.exports = Character;
