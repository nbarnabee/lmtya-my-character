/* ----  Character Template


"CHARACTER NAME GOES HERE" : {
  name: "",
  system: "",
  campaign_world: "",
  race: "",
  gender: "",
  age: "",
  description: "",
  summary: "",
  factoid: "",
  quote: "",
  favSkill: "",
  favSpell: "",
  class: [],
  subClass: [],
  level: [],
}


---------  END TEMPLATE */





const characters = {
  "Alec" : {
    name: "Alec Greystone",
    system: "D&D5e",
    campaign_world: "Greyhawk",
    race: "human",
    gender: "male",
    age: "27",
    description: "Slim, middle-height, with dark hair and eyes.  Dresses with elegant simplicity in black and shades of grey.",
    summary: "Treasure hunter and would-be ladies' man.",
    factoid: "Craves fame and fortune above all else.",
    quote: "There's no problem a little magic can't solve.",
    favSkill: "Persuasion",
    favSpell: "Prestidigitation",
    class: ["Wizard", "Rogue"],
    subClass: ["Transmutation", ""],
    level: [9, 2],
  },
  
  "Vivienne" : {
    name: "Vivienne d'Lyrandar",
    system: "D&D5e",
    campaign_world: "Eberron",
    race: "half-elf",
    gender: "female",
    age: "24",
    description: "Blonde and pale, with eyes the color of the sea.  Takes obvious pride in her appearance.",
    summary: "A Dragonmarked scion of House Lyrandar, Vivienne is rich, selfish, and thoroughly convinced of her own greatness.",
    factoid: "Believes that she will lead her House one day.",
    quote: "This is getting tiresome.",
    favSkill: "",
    favSpell: "Call Lightning",
    class: ["Cleric", "Sorcerer"],
    subClass: ["Tempest", "Storm"],
    level: [7, 1],
  },

  "Octavia" : {
    name: "Octavia Gallo",
    system: "Pathfinder1E",
    campaign_world: "Golarion",
    race: "human",
    gender: "female",
    age: "17",
    description: "A slender young woman with a mass of auburn hair.  Her duelling blade is always at her side.",
    summary: "A hot-headed young follower of Iomedae.",
    factoid: "Prone to jumping out of windows in pursuit of her foes.",
    quote: "I promise we'll make this right.",
    favSkill: "Diplomacy",
    favSpell: "",
    class: ["Paladin", "Swashbuckler"],
    subClass: ["Virtuous Bravo", "Bravo"],
    level: [5, 1],
  }
  
};

exports.characters = characters;