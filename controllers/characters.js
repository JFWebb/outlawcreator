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
    Character.findOne({}, (err, foundCharacter) => {
        res.redirect(`/characters/${foundCharacter._id}`);
    });

});

// New
router.get('/new-character', (req, res) => {
    res.render('characters/newChar.ejs');
});

// Destroy
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
        foundCharacter.quirks = req.body.quirks
        foundCharacter.image = req.body.image
        foundCharacter.influence = req.body.influence
        foundCharacter.luck = req.body.luck
        foundCharacter.save();
        res.redirect(`/characters/${req.params.id}`);
    });
});

// -- update characters individual skills
// router.patch('/:id', (req, res) => {
//     let newSkill = {
//         skillName: req.body.skillName,
//         skillPerc: Number(req.body.skillPerc)
//     };
//     Character.findById(req.params.id, (err, foundCharacter) => {
//         foundCharacter.iSkills.push(newSkill)
//         foundCharacter.save();
//         res.redirect(`/characters/${foundCharacter._id}/new-skill`)
//     })
// });

// Create
// -- Create New Char
router.post('/', (req, res) => {
    if (req.body.influence === 'on') {
        req.body.influence = true;
    } else {
        req.body.influence = false;
    };
    Character.create(req.body, (err, createdCharacter) => {
        res.redirect(`/characters/${createdCharacter._id}`);
    });
});

// -- Create New Skill

// Edit
// -- edit character
router.get('/:id/edit', (req, res) => {
    Character.findById(req.params.id, (err, foundCharacter) => {
        res.render('characters/editChar.ejs', {
            character: foundCharacter
        });
    });
});

// -- add new skill
// router.get('/:id/new-skill', (req, res) => {
//     Character.findById(req.params.id, (err, foundCharacter) => {
//         res.render('characters/addskill.ejs', {
//             character: foundCharacter
//         });
//     })
// });

// Show
router.get('/:_id', (req, res) => {
    Character.findById(req.params._id, (err, foundCharacter) => {
        Character.find({}, (err, foundCharacters) => {
            res.render('../views/characters/dashboard.ejs', {
                characters: foundCharacters,
                character: foundCharacter,
                user: req.user
            });
        });
    });
});
// =================================================
// EXPORTS
// =================================================
module.exports = router;