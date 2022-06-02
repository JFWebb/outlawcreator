// Disclamer: I do not own the rights to Dusk City Outlaws. I am not affiliated with Dusk City Outlaws or Scratch Pad Publishing. All information regarding character types, cartels, and character attributes belong to Dusk City Outlaws and Scratchpad Publishing. This is a personal product designed for personal use. 

// =================================================
// DEPENDCIES & DATA VARIABLES
// =================================================
// -- packages
const express = require('express');
const { db, rawListeners } = require('../models/characters.js');
const router = express.Router();
const app = express();

// -- models
const Character = require('../models/characters.js');
const cKnowledge = require('../models/cartelKnowledge.js')

// =================================================
// MOUNT MIDDLEWARE
// =================================================
app.use(express.urlencoded({extended:true}));

// =================================================
// MOUNT ROUTES
// =================================================
// Seed
const characterSeed = require('../models/characterSeed.js');
router.get('/seed', (req, res) => {
    Character.create(characterSeed, (error, allProducts) => {
        Character.findOne({}, (err, foundCharacter) => {
            res.redirect(`/characters/${foundCharacter._id}`);
        });
    });
});

// Index
// -- Home Page
// If database empty, direct to seed. if not empty, direct to first character
router.get('/', (req, res) => {
    Character.countDocuments({}, function (err, count)
    {
        if (count == 0 ) {
            res.redirect('/characters/seed')
        } else {
            Character.findOne({}, (err, foundCharacter) => {
                res.redirect(`/characters/${foundCharacter._id}`);
            });
        };
    });
});

// New
router.get('/new-character', (req, res) => {
    res.render('/characters/newChar.ejs');
});

// Destroy
// -- delete character
router.delete('/:id', (req, res) => {
    Character.findByIdAndDelete(req.params.id, () => {
        res.redirect('/characters/');
    });
});

// Update
// -- update character whole doc
router.patch('/:id', (req, res) => {
    Character.findById(req.params.id, (err, foundCharacter) => {
        if (req.body.influence === 'on') {
            req.body.influence = true;
        } else {
            req.body.influence = false;
        };
        foundCharacter.name = req.body.name
        foundCharacter.cartel = req.body.cartel
        foundCharacter.speciality = req.body.speciality
        foundCharacter.description = req.body.description
        foundCharacter.quirks = req.body.quirks.split(',');
        foundCharacter.iknowledge = req.body.iknowledge
        foundCharacter.image = req.body.image
        foundCharacter.influence = req.body.influence
        foundCharacter.luck = req.body.luck
        foundCharacter.save();
        res.redirect(`/characters/${req.params.id}`);
    });
});

//-- update characters individual skills
router.patch('/addskill/:id', (req, res) => {
    let newSkill = {
        skillName: req.body.skillName,
        skillPerc: Number(req.body.skillPerc)
    };
    Character.findById(req.params.id, (err, foundCharacter) => {
        foundCharacter.iSkills.push(newSkill)
        foundCharacter.save();
        res.redirect(`/characters/${foundCharacter._id}`)
    });
});

//-- delete skill
router.patch('/:charID/:skillID', (req, res) => {
    Character.findById(req.params.charID, (err, foundCharacter) => {
        
        foundCharacter.iSkills.pull(req.params.skillID)
        foundCharacter.save();
        res.redirect(`/characters/${foundCharacter._id}`)
    });
});

// Create
// -- create New Char
router.post('/', (req, res) => {
    if (req.body.influence === 'on') {
        req.body.influence = true;
    } else {
        req.body.influence = false;
    };
    req.body.quirks = req.body.quirks.split(',');
    Character.create(req.body, (err, createdCharacter) => {
        res.redirect(`/characters/${createdCharacter._id}`);
    });
});

// -- create New Skill

// Edit
// -- edit character
router.get('/:id/edit', (req, res) => {
    Character.findById(req.params.id, (err, foundCharacter) => {
        res.render('characters/editChar.ejs', {
            character: foundCharacter
        });
    });
});

router.get('/:_id', (req, res) => {
    Character.findById(req.params._id, (err, foundCharacter) => {
        let cartel = cKnowledge.find (item => item.cartel == foundCharacter.cartel);
        Character.find({}, (err, foundCharacters) => {
            res.render('../views/characters/dashboard.ejs', {
                characters: foundCharacters,
                character: foundCharacter,
                cartel: cartel,
            });
        });
    });
});

// =================================================
// EXPORTS
// =================================================
module.exports = router;