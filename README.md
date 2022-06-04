<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO --> <!--
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
 </div> -->

<h1 align="center">Let Me Tell You About My Character</h1>

  <p align="center">
    An API that allows you to sate the overwhelming need to tell someone about your RPG character, and to explore the diverse cast of characters played by your peers.
    <br />
    <br />
    <a href="https://lmtya-my-character.herokuapp.com/">Access the API</a>
    ·
    <a href="https://github.com/nbarnabee/lmtya-my-character/issues">Report Bug</a>
    ·
    <a href="https://github.com/nbarnabee/lmtya-my-character/issues">Request Feature</a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

LMTYA-My-Character is an API that allows you to search a database of characters.  But what good is an empty database?  That's where you come in, fellow RPG lover!  Do you have a character (or characters) that you'd like to tell someone about?  You grow the database, fulfill your need to talk about your character, get credited as a contributor, and increase your daily commit count on GitHub!  What's not to like?

<!-- GETTING STARTED -->
## Getting Started

To contribute to the project, all you have to do is follow these **6 simple steps**. 
1. Fork the Project
2. Create a new branch (`git checkout -b add_new_character`)
3. Add your character to `charList.js` (please see the [guidelines](#guidelines) below)
4. Commit your Changes (`git commit -m 'Add new character'`)
5. Push to the Branch (`git push origin add_new_character`)
6. Open a Pull Request

If you're a first-time contributor to GitHub, I strongly recommend checking out [Contribute to this project](https://github.com/Syknapse/Contribute-To-This-Project) by [Syknapse](https://github.com/Syknapse), which includes an exhaustive walkthrough.  


### Guidelines
<a href="#guidelines"></a>
In order to add your character to the list, please copy the template found at the start of the `charList.js` file
```
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
```
and paste it at the end of the `characters` array.  Fill out as many of the entires as you'd like and leave the rest as empty strings (`""`).  

This template was designed with D&D/Pathfinder-type systems in mind and not all fields may be applicable to your character.  

- Please use lower case letters only for every entry other than `name`, `description`, `summary`, `factoid` and `quote`.
- Please keep `description`, `summary`, `factoid` and `quote` to one or two sentences.  (Sorry, it was difficult for me, too!)
- values for `system` should avoid special characters.  For example, `dnd5e` works.  `d&d3.5` is right out.  Acceptable values include `dnd5e`, `dnd4e`, `pathfinder1e`, `pathfinder2e`, `bitd`, `dsa`, `motw`  (Hmm, I might have to make a chart.)
- `description` should be a physical description of your character
- `summary` should be a synopsis of their personality or characteristics
- `factoid` could be any random fact about your character
- `quote` could be something your character often says, thinks, or feels

`class`, `sub_class`, and `level` should be entered in the same order:
```
["primaryClass", "secondaryClass"]
["primarySubclass", "secondarySubclass"]
["primaryLevel", "secondaryLevel"]
```
For example, a Lvl 9 Wizard (transmuter), lvl 3 Rogue (Arcane Trickster) would format the entries as follows:
```
class: ["wizard", "rogue"],
sub_class: ["transmuter", "arcane trickster"]
level: [9, 3]
```
Here's an example entry:
```
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
  }
```



<!-- ROADMAP -->
## Roadmap

- [ ] Flesh out API documentation
- [ ] Enable multi-parameter searches
- [ ] Transfer the character list from a .js file to MongoDB

See the [open issues](https://github.com/nbarnabee/lmtya-my-character/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Twitter: [@NicoleBarnabee](https://twitter.com/NicoleBarnabee)

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/nbarnabee/lmtya-my-character.svg?style=for-the-badge
[contributors-url]: https://github.com//nbarnabee/lmtya-my-character//graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nbarnabee/lmtya-my-character.svg?style=for-the-badge
[forks-url]: https://github.com//nbarnabee/lmtya-my-character/network/members
[stars-shield]: https://img.shields.io/github/stars/nbarnabee/lmtya-my-character.svg?style=for-the-badge
[stars-url]: https://github.com/nbarnabee/lmtya-my-character/stargazers
[issues-shield]: https://img.shields.io/github/issues/nbarnabee/lmtya-my-character.svg?style=for-the-badge
[issues-url]: https://github.com/nbarnabee/lmtya-my-character/issues
[license-shield]: https://img.shields.io/github/license/nbarnabee/lmtya-my-character.svg?style=for-the-badge
[license-url]: https://github.com/nbarnabee/lmtya-my-character/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
