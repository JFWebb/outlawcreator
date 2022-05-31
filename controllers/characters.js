// =================================================
// DEPENDCIES & DATA VARIABLES
// =================================================
// -- packages
const express = require('express');
const { db } = require('../models/characters.js');
const router = express.Router();
const app = express();

// -- models
const Character = require('../models/characters.js');


// =================================================
// MOUNT MIDDLEWARE
// =================================================
app.use(express.urlencoded({extended:true}));

// =================================================
// MOUNT ROUTES
// =================================================
// Index
// -- Home Page
// ?? Have this redirect to first character
router.get('/', (req, res) => {
    Character.find({}, (err, foundCharacters) => {
        res.render('../views/characters/dashboard.ejs', {
            characters: foundCharacters,
        });
    })
});

// New
router.get('/new-character', (req, res) => {
    res.render('characters/newChar.ejs');
});

// Destroy

// Update
// Create
router.post('/', (req, res) => {
    Character.create(req.body, (err, createdCharacter) => {
        res.redirect(`/characters/${createdCharacter._id}`);
    });
});

// Edit
// Show
router.get('/:_id', (req, res) => {
    Character.findById(req.params._id, (err, foundCharacter) => {
        Character.find({}, (err, foundCharacters) => {
            res.render('../views/characters/dashboard.ejs', {
                characters: foundCharacters,
                character: foundCharacter
                // character: foundCharacters.find((obj) => {
                //     return obj._id = req.params.id;
                // }),
            });
        });
        console.log(foundCharacter);
    })
    // Character.find({}, (err, foundCharacters) => {
    //     res.render('../views/characters/dashboard.ejs', {
    //         characters: foundCharacters,
    //         // character: foundCharacters.find((obj) => {
    //         //     return obj._id = req.params.id;
    //         // }),
    //     });
    // });
});
// =================================================
// EXPORTS
// =================================================
module.exports = router;