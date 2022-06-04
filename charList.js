/* ----  Character Template


{
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
  fav_skill: "",
  fav_spell: "",
  class: [],
  sub_class: [],
  level: [],
}


---------  END TEMPLATE */





const characters = [ 
  {
    name: "Alec Greystone",
    system: "dnd5e",
    campaign_world: "greyhawk",
    race: "human",
    gender: "male",
    age: "27",
    description: "Slim, middle-height, with dark hair and eyes.  Dresses with elegant simplicity in black and shades of grey.",
    summary: "Treasure hunter and would-be ladies' man.",
    factoid: "Craves fame and fortune above all else.",
    quote: "There's no problem a little magic can't solve.",
    fav_skill: "persuasion",
    fav_spell: "prestidigitation",
    class: ["wizard", "rogue"],
    sub_class: ["transmutation", ""],
    level: [9, 2],
  },
  
  {
    name: "Vivienne d'Lyrandar",
    system: "dnd5e",
    campaign_world: "eberron",
    race: "half-elf",
    gender: "female",
    age: "24",
    description: "Blonde and pale, with eyes the color of the sea.  Takes obvious pride in her appearance.",
    summary: "A Dragonmarked scion of House Lyrandar, Vivienne is rich, selfish, and thoroughly convinced of her own greatness.",
    factoid: "Believes that she will lead her House one day.",
    quote: "This is getting tiresome.",
    fav_skill: "",
    fav_spell: "call lightning",
    class: ["cleric", "sorcerer"],
    sub_class: ["tempest", "storm"],
    level: [7, 1],
  },

  {
    name: "Octavia Gallo",
    system: "pathfinder1e",
    campaign_world: "golarion",
    race: "human",
    gender: "female",
    age: "17",
    description: "A slender young woman with a mass of auburn hair.  Her duelling blade is always at her side.",
    summary: "A hot-headed young follower of Iomedae.",
    factoid: "Prone to jumping out of windows in pursuit of her foes.",
    quote: "I promise we'll make this right.",
    fav_skill: "diplomacy",
    fav_spell: "",
    class: ["paladin", "swashbuckler"],
    sub_class: ["virtuous bravo", "bravo"],
    level: [5, 1],
  }
  


];

exports.characters = characters;