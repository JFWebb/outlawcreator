//Disclamer: I do not own the rights to Dusk City Outlaws. I am not affiliated with Dusk City Outlaws or Scratch Pad Publishing. All information regarding character types, cartels, and character attributes belong to Dusk City Outlaws and Scratchpad Publishing. This is a personal product designed for personal use. 
module.exports = [{
    name: 'EXAMPLE: Locke Lamora',
    cartel: 'Independent',
    speciality: 'Grifter',
    description: 'Locke Lamora is the main protagonist of the series and a young thief from Camorr and was the garrista of the Gentlemen Bastards for a time. He is a master thief, confidence artist and false-facer, having been trained from a very young age in the art of deception and thieving by Father Chains. He is known by the Camorri nobility as The Thorn of Camorr, a legendary thief who violates the Secret Peace of Camorr by bringing Camorri nobles into his confidence and duping them out of vast sums of their gold. He is also known by many other aliases, depending on what confidence games he and his associates are running at any given time. His true name is unknown to even himself. Locke is a thief, a con man extraordinaire, a false facer; indulging in confidence games so proficient and discreet they evade detection from crime lords and noblemen alike. His daring, assertive nature – aided by cunning, wit and an infuriatingly silver tongue – are his most lethal weapons as his light build leaves him somewhat disadvantaged in combat. However, this audacity frequently blossoms into uninhibited arrogance that appears to peak during his early teens. This, combined with his stubbornness, leads him to make decisions that have a negative impact on anyone unfortunate enough to be caught in his line of fire. Description from the Camoor Wiki (https://camorr.fandom.com/wiki/Locke_Lamora) | Illustration by: Keja Blank (https://www.deviantart.com/kejablank)',
    quirks: ['Priest of Perelandro', 'Card Tricks', 'Spurious Seafaring'],
    // cKnowledge: {type: [String], required: false},
    iKnowledge: 'Priesthood, Nobility, Foreign Affairs, Underground Power Figures',
    // sSkills: sSkillsSchema,
    iSkills: [{
        skillName: 'False-Facing',
        skillPerc: 90
    },{
        skillName: 'Captain a Ship',
        skillPerc: 50
    },{
        skillName: 'Pretend to be a Priest',
        skillPerc: 80
    },{
        skillName: 'Pretend to be a Foreginer',
        skillPerc: 70
    },
    {
        skillName: 'Undermine Underground Peace Agreements',
        skillPerc: 90
    },],
    influence: true,
    luck: 100,
    image: "https://i.imgur.com/eDVwa4o.png",
},
{
    name: 'EXAMPLE: Mort Blackwood',
    cartel: 'Gravediggers',
    speciality: 'Thief',
    description: 'Mortimer Blackwood, or just Mort, was raised in the ward houses of the Gravediggers. Lacking friends in his youth, Mort spent most of his youth hanging out with the local flock of crows. He went from watching them sneak in peoples windows and steal their shiney valubles, to climbing and stealing on his own, and thus began his life as a Theif. Like most Gravediggers, his presence is eerie and disqueiting. He has a pallid and gaunt, his black hair messy and unkempt, with huge eyes and an unnerving stare. One of this childhood crows, hence named Edgar, has become his pet and boon companion and travels with him where-ever he goes. Mort has recently joined a crew called the MFS and has taken up taxidermy in his spare time.',
    quirks: ["Pet: choose an animal that can obey simple command, you add this animal to your equipment", "Fresh Faced: you're a fresh-faced young criminal unnoticed by the eyes of the law. Add one advantage die to any role you make to Tail someone"],
    // cKnowledge: {type: [String], required: false},
    iKnowledge: 'Taxidermy',
    // sSkills: sSkillsSchema,
    iSkills: [{
        skillName: 'Taxidermy',
        skillPerc: 70
    },{
        skillName: 'Forge a Letter',
        skillPerc: 65
    },{
        skillName: 'Tail Someone',
        skillPerc: 65
    },],
    influence: true,
    luck: 80,
    image: "https://i.imgur.com/R5QvGY1.png",
}]