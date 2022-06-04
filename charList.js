/* ----  BEGIN TEMPLATE SECTION


--- COPY BELOW THIS LINE --------



{
  name: "",
  player: "",
  system: "",
  campaign_world: "",
  race: "",
  gender: "",
  age: "",
  description: "",
  summary: "",
  factoid: "",
  quote: "",
  fav_weapon: "",
  fav_skills: [""],
  fav_spells: [""],
  class: [""],
  sub_class: [""],
  level: [],
},



----- COPY ABOVE THIS LINE ---------

Guidelines:

Please copy the template and paste it into the end of the array below.

Fill out as many entries as you like and leave the rest as empty strings ("")

Please keep description, summary, factoid and quote to one or two brief sentences.  (Sorry, it's hard for me, too!)

- `description` should be a physical description of your character
- `summary` should be a synopsis of their personality or characteristics
- `factoid` could be any random fact about your character
- `quote` could be something your character often says, thinks, or feels


`class`, `sub_class`, and `level` should be entered in the same order:
["primaryClass", "secondaryClass"]
["primarySubclass", "secondarySubclass"]
["primaryLevel", "secondaryLevel"]

For example, a Lvl 9 Wizard (transmuter), lvl 3 Rogue (Arcane Trickster) would format the entries as follows:

class: ["wizard", "rogue"],
sub_class: ["transmuter", "arcane trickster"]
level: [9, 3]


---------  END TEMPLATE SECTION */





const characters = [ 
  {
    name: "Alec Greystone",
    player: "nicoleb",
    system: "dnd5e",
    campaign_world: "greyhawk",
    race: "human",
    gender: "male",
    age: "27",
    description: "Slim, middle-height, with dark hair and eyes.  Dresses with elegant simplicity in black and shades of grey.",
    summary: "Treasure hunter and would-be ladies' man.",
    factoid: "Craves fame and fortune above all else.",
    quote: "There's no problem a little magic can't solve.",
    fav_weapon: "silver tongue",
    fav_skills: ["persuasion", "stealth"],
    fav_spells: ["invisibility", "prestidigitation"],
    class: ["wizard", "rogue"],
    sub_class: ["transmutation", ""],
    level: [9, 2],
  },
  
  {
    name: "Vivienne d'Lyrandar",
    player: "nicoleb",
    system: "dnd5e",
    campaign_world: "eberron",
    race: "half-elf",
    gender: "female",
    age: "24",
    description: "Blonde and pale, with eyes the color of the sea.  Takes obvious pride in her appearance.",
    summary: "A Dragonmarked scion of House Lyrandar, Vivienne is rich, selfish, and thoroughly convinced of her own greatness.",
    factoid: "Believes that she will lead her House one day.",
    quote: "This is getting tiresome.",
    fav_weapon: "trident",
    fav_skills: [""],
    fav_spells: ["call lightning", "booming blade"],
    class: ["cleric", "sorcerer"],
    sub_class: ["tempest", "storm"],
    level: [7, 1],
  },

  {
    name: "Octavia Gallo",
    player: "nicoleb",
    system: "pathfinder1e",
    campaign_world: "golarion",
    race: "human",
    gender: "female",
    age: "17",
    description: "A slender young woman with a mass of auburn hair.  Her duelling blade is always at her side.",
    summary: "A hot-headed and somewhat naive young follower of Iomedae.",
    factoid: "Prone to jumping out of windows in pursuit of her foes.",
    quote: "I promise we'll make this right.",
    fav_weapon: "duelling blade",
    fav_skills: ["acrobatics", "diplomacy"],
    fav_spells: [""],
    class: ["paladin", "swashbuckler"],
    sub_class: ["virtuous bravo", "bravo"],
    level: [5, 1],
  },
  


];

exports.characters = characters;